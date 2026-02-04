import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  generateQRCode,
  generateBarcode,
  type QRDotStyle,
  type QRCornerSquareStyle,
  type QRCornerDotStyle,
} from "@/utils/qrBarcodeGenerator";
import { useSEO } from "@/lib/seoHooks";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ColorPicker } from "@/components/ui/color-picker";
import {
  QrCode,
  Barcode,
  Copy,
  Download,
  RotateCcw,
  HelpCircle,
  Sparkles,
  Image,
  Palette,
  Settings2,
  Type,
  Check,
  X,
} from "lucide-react";

interface QROptions {
  text: string;
  size: number;
  fgColor: string;
  bgColor: string;
  errorCorrectionLevel: "L" | "M" | "Q" | "H";
  logoDataUrl?: string;
  logoSizeRatio: number;
  margin: number;
  dotStyle: QRDotStyle;
  cornerSquareStyle: QRCornerSquareStyle;
  cornerDotStyle: QRCornerDotStyle;
}

interface BarcodeOptions {
  text: string;
  format: string;
  width: number;
  height: number;
  displayValue: boolean;
  fontSize: number;
  lineColor: string;
  background: string;
  margin: number;
}

interface HistoryItem {
  type: "qr" | "barcode";
  dataUrl: string;
  timestamp: Date;
  label: string;
}

const qrExamples = [
  { label: "Website", value: "https://ctrlbits.com" },
  { label: "Email", value: "mailto:hi@ctrlbits.com" },
  { label: "Phone", value: "tel:+9779709659012" },
  { label: "WiFi", value: "WIFI:T:WPA;S:MyNetwork;P:password123;;" },
  { label: "SMS", value: "sms:+9779709659012?body=Hello!" },
  {
    label: "vCard",
    value:
      "BEGIN:VCARD\nVERSION:3.0\nFN:Bitman Ctrl Bits\nTEL:+9779709659012\nEND:VCARD",
  },
];

const barcodeExamples = [
  { label: "Product", value: "123456789012" },
  { label: "ISBN", value: "978-3-16-148410-0" },
  { label: "SKU", value: "SKU-ABC-12345" },
  { label: "Serial", value: "SN-2024-001234" },
];

const barcodeFormats = [
  { value: "CODE128", label: "CODE128 (Universal)" },
  { value: "CODE39", label: "CODE39 (Industrial)" },
  { value: "EAN13", label: "EAN-13 (Retail)" },
  { value: "EAN8", label: "EAN-8 (Small products)" },
  { value: "UPC", label: "UPC (North America)" },
  { value: "ITF14", label: "ITF-14 (Shipping)" },
  { value: "MSI", label: "MSI (Inventory)" },
  { value: "pharmacode", label: "Pharmacode (Pharma)" },
  { value: "codabar", label: "Codabar (Libraries)" },
];

export default function QRBarcodeGeneratorPage() {
  // SEO Optimization
  useSEO({
    title: "Free QR Code & Barcode Generator (No Sign-up) | WiFi, vCard & URL",
    description: "Create custom QR codes for WiFi, Links, and vCards. Generate bulk barcodes (UPC, EAN, Code128). High-resolution PNG download with no watermarks.",
    imageUrl: "https://lab.ctrlbits.com/og-image.png",
  });

  // Add structured data schemas
  React.useEffect(() => {
    // WebApplication Schema
    const webAppSchema = document.createElement('script');
    webAppSchema.type = 'application/ld+json';
    webAppSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Free QR & Barcode Generator",
      "url": "https://lab.ctrlbits.com/qr-barcode-generator",
      "description": "Create custom QR codes with logos and generate standard barcodes (UPC, EAN, Code128). No sign-up required, high-resolution download.",
      "applicationCategory": "DesignApplication",
      "operatingSystem": "Any",
      "fileFormat": "image/png",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "keywords": "QR Code, Barcode, UPC, EAN, Code128, WiFi QR"
    });
    document.head.appendChild(webAppSchema);

    // BreadcrumbList Schema
    const breadcrumbSchema = document.createElement('script');
    breadcrumbSchema.type = 'application/ld+json';
    breadcrumbSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://lab.ctrlbits.com/"
      },{
        "@type": "ListItem",
        "position": 2,
        "name": "Tools",
        "item": "https://lab.ctrlbits.com/tools"
      },{
        "@type": "ListItem",
        "position": 3,
        "name": "QR & Barcode Generator",
        "item": "https://lab.ctrlbits.com/qr-barcode-generator"
      }]
    });
    document.head.appendChild(breadcrumbSchema);

    return () => {
      document.head.removeChild(webAppSchema);
      document.head.removeChild(breadcrumbSchema);
    };
  }, []);

  const [mode, setMode] = useState<"qr" | "barcode">("qr");
  const [qrOptions, setQROptions] = useState<QROptions>({
    text: "",
    size: 300,
    fgColor: "#000000",
    bgColor: "#ffffff",
    errorCorrectionLevel: "M",
    logoDataUrl: undefined,
    logoSizeRatio: 0.2,
    margin: 2,
    dotStyle: "square",
    cornerSquareStyle: "square",
    cornerDotStyle: "square",
  });

  const [barcodeOptions, setBarcodeOptions] = useState<BarcodeOptions>({
    text: "",
    format: "CODE128",
    width: 2,
    height: 100,
    displayValue: true,
    fontSize: 20,
    lineColor: "#000000",
    background: "#ffffff",
    margin: 10,
  });

  const [qrDataUrl, setQRDataUrl] = useState<string | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [showGuide, setShowGuide] = useState(false);
  const [activeTab, setActiveTab] = useState<"content" | "style" | "advanced">(
    "content",
  );
  const barcodeCanvasRef = useRef<HTMLCanvasElement>(null);

  // Generate QR code
  useEffect(() => {
    if (mode === "qr" && qrOptions.text) {
      generateQRCode({
        text: qrOptions.text,
        size: qrOptions.size,
        fgColor: qrOptions.fgColor,
        bgColor: qrOptions.bgColor,
        errorCorrectionLevel: qrOptions.errorCorrectionLevel,
        margin: qrOptions.margin,
        dotStyle: qrOptions.dotStyle,
        cornerSquareStyle: qrOptions.cornerSquareStyle,
        cornerDotStyle: qrOptions.cornerDotStyle,
      }).then(async (url) => {
        // Apply logo if present
        if (qrOptions.logoDataUrl) {
          const canvas = document.createElement("canvas");
          canvas.width = qrOptions.size;
          canvas.height = qrOptions.size;
          const ctx = canvas.getContext("2d");
          if (!ctx) return;

          const img = new window.Image();
          img.src = url;
          img.onload = () => {
            ctx.drawImage(img, 0, 0, qrOptions.size, qrOptions.size);

            const logoImg = new window.Image();
            logoImg.src = qrOptions.logoDataUrl!;
            logoImg.onload = () => {
              const logoSize = qrOptions.size * qrOptions.logoSizeRatio;
              const logoX = (qrOptions.size - logoSize) / 2;
              const logoY = (qrOptions.size - logoSize) / 2;

              // Draw white background for logo
              ctx.fillStyle = qrOptions.bgColor;
              ctx.beginPath();
              ctx.arc(
                qrOptions.size / 2,
                qrOptions.size / 2,
                logoSize / 2 + 5,
                0,
                2 * Math.PI,
              );
              ctx.fill();

              // Draw logo
              ctx.save();
              ctx.beginPath();
              ctx.arc(
                qrOptions.size / 2,
                qrOptions.size / 2,
                logoSize / 2,
                0,
                2 * Math.PI,
              );
              ctx.closePath();
              ctx.clip();
              ctx.drawImage(logoImg, logoX, logoY, logoSize, logoSize);
              ctx.restore();

              setQRDataUrl(canvas.toDataURL("image/png"));
            };
          };
        } else {
          setQRDataUrl(url);
        }
      });
    } else if (mode === "qr") {
      setQRDataUrl(null);
    }
  }, [mode, qrOptions]);

  // Generate barcode
  useEffect(() => {
    if (mode === "barcode" && barcodeOptions.text && barcodeCanvasRef.current) {
      try {
        generateBarcode(
          {
            text: barcodeOptions.text,
            format: barcodeOptions.format,
            width: barcodeOptions.width,
            height: barcodeOptions.height,
            displayValue: barcodeOptions.displayValue,
            fontSize: barcodeOptions.fontSize,
            lineColor: barcodeOptions.lineColor,
            background: barcodeOptions.background,
          },
          barcodeCanvasRef.current,
        );
      } catch (e) {
        console.error("Barcode generation error:", e);
      }
    }
  }, [mode, barcodeOptions]);

  // Handle logo upload
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setQROptions((opts) => ({
          ...opts,
          logoDataUrl: event.target?.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Remove logo
  const removeLogo = () => {
    setQROptions((opts) => ({ ...opts, logoDataUrl: undefined }));
  };

  // Copy to clipboard
  const copyToClipboard = async () => {
    const dataUrl =
      mode === "qr" ? qrDataUrl : barcodeCanvasRef.current?.toDataURL();
    if (!dataUrl) return;

    try {
      const response = await fetch(dataUrl);
      const blob = await response.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ [blob.type]: blob }),
      ]);
      setCopiedField("image");
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  // Download
  const handleDownload = (format: "png" | "jpeg" = "png") => {
    const dataUrl =
      mode === "qr"
        ? qrDataUrl
        : barcodeCanvasRef.current?.toDataURL(`image/${format}`);
    if (!dataUrl) return;

    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `${mode === "qr" ? "qr-code" : "barcode"}.${format}`;
    link.click();

    // Add to history
    setHistory((prev) => [
      {
        type: mode,
        dataUrl,
        timestamp: new Date(),
        label:
          mode === "qr" ? qrOptions.text.substring(0, 30) : barcodeOptions.text,
      },
      ...prev.slice(0, 9),
    ]);
  };

  // Clear all
  const clearAll = () => {
    if (mode === "qr") {
      setQROptions((opts) => ({ ...opts, text: "", logoDataUrl: undefined }));
      setQRDataUrl(null);
    } else {
      setBarcodeOptions((opts) => ({ ...opts, text: "" }));
    }
  };

  // Load example
  const loadExample = (value: string) => {
    if (mode === "qr") {
      setQROptions((opts) => ({ ...opts, text: value }));
    } else {
      setBarcodeOptions((opts) => ({ ...opts, text: value }));
    }
  };

  const hasOutput = mode === "qr" ? !!qrDataUrl : !!barcodeOptions.text;

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black">
      {/* Dot Matrix Background */}
      <div className="fixed inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative z-10 p-4 sm:p-6 lg:p-8">
        <div className="max-w-[1400px] mx-auto space-y-6">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-black dark:text-white mb-2">
              Free QR Code & Barcode Generator
            </h1>
            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-12 bg-neutral-300 dark:bg-neutral-700" />
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
                Create • Customize • Download
              </p>
              <div className="h-px w-12 bg-neutral-300 dark:bg-neutral-700" />
            </div>
          </motion.div>

          {/* Mode Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="flex flex-wrap items-center justify-between gap-4"
          >
            <div className="flex items-center gap-2 p-1 bg-neutral-100 dark:bg-neutral-900 rounded-full">
              <button
                onClick={() => setMode("qr")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  mode === "qr"
                    ? "bg-black dark:bg-white text-white dark:text-black"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                }`}
              >
                <QrCode className="w-4 h-4" />
                QR Code
              </button>
              <button
                onClick={() => setMode("barcode")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  mode === "barcode"
                    ? "bg-black dark:bg-white text-white dark:text-black"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                }`}
              >
                <Barcode className="w-4 h-4" />
                Barcode
              </button>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAll}
                className="gap-2 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900"
              >
                <RotateCcw className="w-4 h-4" />
                Clear
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowGuide(!showGuide)}
                className="gap-2 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900"
              >
                <HelpCircle className="w-4 h-4" />
                Guide
              </Button>
            </div>
          </motion.div>

          {/* Main Layout */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left - Options */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              {/* Tab Navigation */}
              <div className="flex gap-1 p-1 bg-neutral-100 dark:bg-neutral-900 rounded-xl">
                {[
                  { id: "content", label: "Content", icon: Type },
                  { id: "style", label: "Style", icon: Palette },
                  { id: "advanced", label: "Advanced", icon: Settings2 },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeTab === tab.id
                        ? "bg-white dark:bg-black text-black dark:text-white shadow-sm"
                        : "text-neutral-600 dark:text-neutral-400"
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Content Tab */}
              <AnimatePresence mode="wait">
                {activeTab === "content" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                  >
                    {/* Input */}
                    <div className="bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 space-y-3">
                      <label className="text-sm font-medium text-black dark:text-white">
                        {mode === "qr" ? "QR Content" : "Barcode Value"}
                      </label>
                      <textarea
                        value={
                          mode === "qr" ? qrOptions.text : barcodeOptions.text
                        }
                        onChange={(e) =>
                          mode === "qr"
                            ? setQROptions((o) => ({
                                ...o,
                                text: e.target.value,
                              }))
                            : setBarcodeOptions((o) => ({
                                ...o,
                                text: e.target.value,
                              }))
                        }
                        placeholder={
                          mode === "qr"
                            ? "Enter URL, text, email, phone, or any content..."
                            : "Enter barcode value..."
                        }
                        className="w-full min-h-[100px] bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 text-sm text-black dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white resize-none"
                      />
                    </div>

                    {/* Examples */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-neutral-400" />
                        <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                          Quick Examples
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {(mode === "qr" ? qrExamples : barcodeExamples).map(
                          (ex) => (
                            <Button
                              key={ex.label}
                              size="sm"
                              variant="outline"
                              onClick={() => loadExample(ex.value)}
                              className="text-xs bg-white dark:bg-black border-neutral-200 dark:border-neutral-800"
                            >
                              {ex.label}
                            </Button>
                          ),
                        )}
                      </div>
                    </div>

                    {/* Barcode Format Selector */}
                    {mode === "barcode" && (
                      <div className="bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 space-y-3">
                        <label className="text-sm font-medium text-black dark:text-white">
                          Barcode Format
                        </label>
                        <select
                          value={barcodeOptions.format}
                          onChange={(e) =>
                            setBarcodeOptions((o) => ({
                              ...o,
                              format: e.target.value,
                            }))
                          }
                          className="w-full bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 text-sm"
                        >
                          {barcodeFormats.map((f) => (
                            <option key={f.value} value={f.value}>
                              {f.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}

                    {/* Logo Upload (QR only) */}
                    {mode === "qr" && (
                      <div className="bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 space-y-3">
                        <label className="text-sm font-medium text-black dark:text-white">
                          Center Logo (Optional)
                        </label>
                        {qrOptions.logoDataUrl ? (
                          <div className="flex items-center gap-3">
                            <img
                              src={qrOptions.logoDataUrl}
                              alt="Logo"
                              className="w-12 h-12 object-cover rounded-lg border border-neutral-200 dark:border-neutral-800"
                            />
                            <span className="flex-1 text-sm text-neutral-600 dark:text-neutral-400">
                              Logo added
                            </span>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={removeLogo}
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        ) : (
                          <label className="flex items-center justify-center gap-2 p-4 border-2 border-dashed border-neutral-300 dark:border-neutral-700 rounded-lg cursor-pointer hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
                            <Image className="w-5 h-5 text-neutral-400" />
                            <span className="text-sm text-neutral-500">
                              Upload logo image
                            </span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleLogoUpload}
                              className="hidden"
                            />
                          </label>
                        )}
                        {qrOptions.logoDataUrl && (
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs text-neutral-500">
                              <span>Logo Size</span>
                              <span>
                                {Math.round(qrOptions.logoSizeRatio * 100)}%
                              </span>
                            </div>
                            <Slider
                              min={0.1}
                              max={0.35}
                              step={0.01}
                              value={[qrOptions.logoSizeRatio]}
                              onValueChange={([val]) =>
                                setQROptions((o) => ({
                                  ...o,
                                  logoSizeRatio: val,
                                }))
                              }
                              className="w-full"
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Style Tab */}
                {activeTab === "style" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                  >
                    {/* Colors */}
                    <div className="bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 space-y-4">
                      <label className="text-sm font-medium text-black dark:text-white">
                        Colors
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <span className="text-xs text-neutral-500">
                            {mode === "qr" ? "Foreground" : "Lines"}
                          </span>
                          <div className="flex items-center gap-2">
                            <ColorPicker
                              value={
                                mode === "qr"
                                  ? qrOptions.fgColor
                                  : barcodeOptions.lineColor
                              }
                              onChange={(color) =>
                                mode === "qr"
                                  ? setQROptions((o) => ({
                                      ...o,
                                      fgColor: color,
                                    }))
                                  : setBarcodeOptions((o) => ({
                                      ...o,
                                      lineColor: color,
                                    }))
                              }
                            />
                            <span className="flex-1 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-2 text-sm font-mono text-center">
                              {mode === "qr"
                                ? qrOptions.fgColor
                                : barcodeOptions.lineColor}
                            </span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <span className="text-xs text-neutral-500">
                            Background
                          </span>
                          <div className="flex items-center gap-2">
                            <ColorPicker
                              value={
                                mode === "qr"
                                  ? qrOptions.bgColor
                                  : barcodeOptions.background
                              }
                              onChange={(color) =>
                                mode === "qr"
                                  ? setQROptions((o) => ({
                                      ...o,
                                      bgColor: color,
                                    }))
                                  : setBarcodeOptions((o) => ({
                                      ...o,
                                      background: color,
                                    }))
                              }
                            />
                            <span className="flex-1 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-2 text-sm font-mono text-center">
                              {mode === "qr"
                                ? qrOptions.bgColor
                                : barcodeOptions.background}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Color Presets */}
                      <div className="space-y-2">
                        <span className="text-xs text-neutral-500">
                          Quick Presets
                        </span>
                        <div className="flex gap-2 flex-wrap">
                          {[
                            { fg: "#000000", bg: "#ffffff", label: "Classic" },
                            { fg: "#1a1a2e", bg: "#f0f0f0", label: "Soft" },
                            { fg: "#ffffff", bg: "#000000", label: "Inverted" },
                            { fg: "#2563eb", bg: "#ffffff", label: "Blue" },
                            { fg: "#dc2626", bg: "#ffffff", label: "Red" },
                            { fg: "#16a34a", bg: "#ffffff", label: "Green" },
                            { fg: "#9333ea", bg: "#ffffff", label: "Purple" },
                            { fg: "#ea580c", bg: "#ffffff", label: "Orange" },
                          ].map((preset) => (
                            <button
                              key={preset.label}
                              onClick={() =>
                                mode === "qr"
                                  ? setQROptions((o) => ({
                                      ...o,
                                      fgColor: preset.fg,
                                      bgColor: preset.bg,
                                    }))
                                  : setBarcodeOptions((o) => ({
                                      ...o,
                                      lineColor: preset.fg,
                                      background: preset.bg,
                                    }))
                              }
                              className="flex items-center gap-1.5 px-2 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors text-xs"
                            >
                              <div
                                className="w-3 h-3 rounded-full border border-neutral-300"
                                style={{ backgroundColor: preset.fg }}
                              />
                              <span>{preset.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Size */}
                    <div className="bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 space-y-4">
                      <label className="text-sm font-medium text-black dark:text-white">
                        Size
                      </label>
                      {mode === "qr" ? (
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs text-neutral-500">
                            <span>QR Size</span>
                            <span>{qrOptions.size}px</span>
                          </div>
                          <Slider
                            min={100}
                            max={600}
                            step={10}
                            value={[qrOptions.size]}
                            onValueChange={([val]) =>
                              setQROptions((o) => ({
                                ...o,
                                size: val,
                              }))
                            }
                            className="w-full"
                          />
                          <div className="flex gap-2">
                            {[150, 256, 400, 512].map((size) => (
                              <button
                                key={size}
                                onClick={() =>
                                  setQROptions((o) => ({ ...o, size }))
                                }
                                className={`flex-1 py-1 rounded-lg text-xs font-medium transition-all ${
                                  qrOptions.size === size
                                    ? "bg-black dark:bg-white text-white dark:text-black"
                                    : "bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800"
                                }`}
                              >
                                {size}px
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs text-neutral-500">
                              <span>Bar Width</span>
                              <span>{barcodeOptions.width}px</span>
                            </div>
                            <Slider
                              min={1}
                              max={5}
                              step={0.5}
                              value={[barcodeOptions.width]}
                              onValueChange={([val]) =>
                                setBarcodeOptions((o) => ({
                                  ...o,
                                  width: val,
                                }))
                              }
                              className="w-full"
                            />
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs text-neutral-500">
                              <span>Height</span>
                              <span>{barcodeOptions.height}px</span>
                            </div>
                            <Slider
                              min={40}
                              max={200}
                              step={10}
                              value={[barcodeOptions.height]}
                              onValueChange={([val]) =>
                                setBarcodeOptions((o) => ({
                                  ...o,
                                  height: val,
                                }))
                              }
                              className="w-full"
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* QR Pattern Style */}
                    {mode === "qr" && (
                      <div className="bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 space-y-4">
                        <label className="text-sm font-medium text-black dark:text-white">
                          Pattern Style
                        </label>

                        {/* Dot/Module Style */}
                        <div className="space-y-2">
                          <span className="text-xs text-neutral-500">
                            Data Modules
                          </span>
                          <div className="grid grid-cols-4 gap-2">
                            {[
                              { value: "square", label: "Square", icon: "▪️" },
                              { value: "rounded", label: "Rounded", icon: "◼" },
                              { value: "dots", label: "Dots", icon: "●" },
                              { value: "diamond", label: "Diamond", icon: "◆" },
                              { value: "star", label: "Star", icon: "★" },
                              { value: "classy", label: "Classy", icon: "◢" },
                              {
                                value: "classy-rounded",
                                label: "Classy+",
                                icon: "◥",
                              },
                              {
                                value: "extra-rounded",
                                label: "Pill",
                                icon: "⬤",
                              },
                            ].map((style) => (
                              <button
                                key={style.value}
                                onClick={() =>
                                  setQROptions((o) => ({
                                    ...o,
                                    dotStyle: style.value as QRDotStyle,
                                  }))
                                }
                                className={`p-2 rounded-lg text-center transition-all ${qrOptions.dotStyle === style.value ? "bg-black dark:bg-white text-white dark:text-black" : "bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400"}`}
                              >
                                <div className="text-lg mb-1">{style.icon}</div>
                                <div className="text-[10px] font-medium">
                                  {style.label}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Corner Square Style */}
                        <div className="space-y-2">
                          <span className="text-xs text-neutral-500">
                            Corner Squares
                          </span>
                          <div className="grid grid-cols-4 gap-2">
                            {[
                              { value: "square", label: "Square" },
                              { value: "rounded", label: "Rounded" },
                              { value: "extra-rounded", label: "Extra Round" },
                              { value: "dot", label: "Circle" },
                            ].map((style) => (
                              <button
                                key={style.value}
                                onClick={() =>
                                  setQROptions((o) => ({
                                    ...o,
                                    cornerSquareStyle:
                                      style.value as QRCornerSquareStyle,
                                  }))
                                }
                                className={`py-2 px-1 rounded-lg text-center transition-all text-xs font-medium ${qrOptions.cornerSquareStyle === style.value ? "bg-black dark:bg-white text-white dark:text-black" : "bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400"}`}
                              >
                                {style.label}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Corner Dot Style */}
                        <div className="space-y-2">
                          <span className="text-xs text-neutral-500">
                            Corner Dots
                          </span>
                          <div className="grid grid-cols-2 gap-2">
                            {[
                              { value: "square", label: "Square" },
                              { value: "dot", label: "Circle" },
                            ].map((style) => (
                              <button
                                key={style.value}
                                onClick={() =>
                                  setQROptions((o) => ({
                                    ...o,
                                    cornerDotStyle:
                                      style.value as QRCornerDotStyle,
                                  }))
                                }
                                className={`py-2 px-3 rounded-lg text-center transition-all text-xs font-medium ${qrOptions.cornerDotStyle === style.value ? "bg-black dark:bg-white text-white dark:text-black" : "bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400"}`}
                              >
                                {style.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Barcode Text Options */}
                    {mode === "barcode" && (
                      <div className="bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 space-y-4">
                        <label className="text-sm font-medium text-black dark:text-white">
                          Text Options
                        </label>
                        <div className="space-y-3">
                          <label className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={barcodeOptions.displayValue}
                              onChange={(e) =>
                                setBarcodeOptions((o) => ({
                                  ...o,
                                  displayValue: e.target.checked,
                                }))
                              }
                              className="w-4 h-4 rounded"
                            />
                            <span className="text-sm">
                              Show text below barcode
                            </span>
                          </label>
                          {barcodeOptions.displayValue && (
                            <>
                              <div className="space-y-2">
                                <div className="flex justify-between text-xs text-neutral-500">
                                  <span>Font Size</span>
                                  <span>{barcodeOptions.fontSize}px</span>
                                </div>
                                <Slider
                                  min={10}
                                  max={36}
                                  step={1}
                                  value={[barcodeOptions.fontSize]}
                                  onValueChange={([val]) =>
                                    setBarcodeOptions((o) => ({
                                      ...o,
                                      fontSize: val,
                                    }))
                                  }
                                  className="w-full"
                                />
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Advanced Tab */}
                {activeTab === "advanced" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                  >
                    {mode === "qr" && (
                      <>
                        {/* Error Correction */}
                        <div className="bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 space-y-3">
                          <label className="text-sm font-medium text-black dark:text-white">
                            Error Correction Level
                          </label>
                          <p className="text-xs text-neutral-500">
                            Higher levels allow more damage recovery but create
                            denser codes
                          </p>
                          <div className="grid grid-cols-4 gap-2">
                            {[
                              { value: "L", label: "Low", desc: "7%" },
                              { value: "M", label: "Medium", desc: "15%" },
                              { value: "Q", label: "Quartile", desc: "25%" },
                              { value: "H", label: "High", desc: "30%" },
                            ].map((level) => (
                              <button
                                key={level.value}
                                onClick={() =>
                                  setQROptions((o) => ({
                                    ...o,
                                    errorCorrectionLevel:
                                      level.value as QROptions["errorCorrectionLevel"],
                                  }))
                                }
                                className={`p-2 rounded-lg text-center transition-all ${
                                  qrOptions.errorCorrectionLevel === level.value
                                    ? "bg-black dark:bg-white text-white dark:text-black"
                                    : "bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800"
                                }`}
                              >
                                <div className="text-sm font-medium">
                                  {level.label}
                                </div>
                                <div className="text-xs opacity-60">
                                  {level.desc}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Margin */}
                        <div className="bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 space-y-3">
                          <div className="flex justify-between">
                            <label className="text-sm font-medium text-black dark:text-white">
                              Quiet Zone (Margin)
                            </label>
                            <span className="text-xs text-neutral-500">
                              {qrOptions.margin} modules
                            </span>
                          </div>
                          <Slider
                            min={0}
                            max={6}
                            step={1}
                            value={[qrOptions.margin]}
                            onValueChange={([val]) =>
                              setQROptions((o) => ({
                                ...o,
                                margin: val,
                              }))
                            }
                            className="w-full"
                          />
                        </div>
                      </>
                    )}

                    {mode === "barcode" && (
                      <div className="bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 space-y-3">
                        <div className="flex justify-between">
                          <label className="text-sm font-medium text-black dark:text-white">
                            Margin
                          </label>
                          <span className="text-xs text-neutral-500">
                            {barcodeOptions.margin}px
                          </span>
                        </div>
                        <Slider
                          min={0}
                          max={30}
                          step={1}
                          value={[barcodeOptions.margin]}
                          onValueChange={([val]) =>
                            setBarcodeOptions((o) => ({
                              ...o,
                              margin: val,
                            }))
                          }
                          className="w-full"
                        />
                      </div>
                    )}

                    {/* Tips */}
                    <div className="bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 space-y-3">
                      <label className="text-sm font-medium text-black dark:text-white">
                        Tips
                      </label>
                      <ul className="text-xs text-neutral-500 space-y-1 list-disc pl-4">
                        {mode === "qr" ? (
                          <>
                            <li>
                              Use High error correction (H) when adding a logo
                            </li>
                            <li>
                              Ensure good contrast between colors for scanning
                            </li>
                            <li>
                              Keep the quiet zone (white border) for reliable
                              scanning
                            </li>
                            <li>Test scanning before printing</li>
                          </>
                        ) : (
                          <>
                            <li>EAN-13 requires exactly 12-13 digits</li>
                            <li>CODE128 supports letters and numbers</li>
                            <li>Ensure adequate contrast for scanning</li>
                            <li>Test the barcode with a scanner before use</li>
                          </>
                        )}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Right - Preview & Download */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {/* Preview */}
              <div className="bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <label className="text-sm font-medium text-black dark:text-white">
                    Preview
                  </label>
                  {hasOutput && (
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={copyToClipboard}
                        className="h-8 w-8 p-0"
                      >
                        {copiedField === "image" ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  )}
                </div>

                <div
                  className="flex items-center justify-center min-h-80 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-xl p-4"
                  style={{
                    background:
                      mode === "qr"
                        ? `repeating-conic-gradient(#f0f0f0 0% 25%, #ffffff 0% 50%) 50% / 20px 20px`
                        : undefined,
                  }}
                >
                  {mode === "qr" ? (
                    qrDataUrl ? (
                      <img
                        src={qrDataUrl}
                        alt="QR Code"
                        style={{
                          width: Math.min(qrOptions.size, 400),
                          height: Math.min(qrOptions.size, 400),
                        }}
                        className="rounded-lg shadow-lg"
                      />
                    ) : (
                      <div className="text-center text-neutral-400">
                        <QrCode className="w-16 h-16 mx-auto mb-3 opacity-30" />
                        <p className="text-sm">
                          Enter content to generate QR code
                        </p>
                      </div>
                    )
                  ) : barcodeOptions.text ? (
                    <canvas
                      ref={barcodeCanvasRef}
                      className="rounded-lg shadow-lg"
                    />
                  ) : (
                    <div className="text-center text-neutral-400">
                      <Barcode className="w-16 h-16 mx-auto mb-3 opacity-30" />
                      <p className="text-sm">Enter value to generate barcode</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Download Options */}
              {hasOutput && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 space-y-3"
                >
                  <label className="text-sm font-medium text-black dark:text-white">
                    Download
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    <Button
                      onClick={() => handleDownload("png")}
                      className="bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      PNG
                    </Button>
                    <Button
                      onClick={() => handleDownload("jpeg")}
                      variant="outline"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      JPEG
                    </Button>
                    <Button onClick={copyToClipboard} variant="outline">
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* History */}
              {history.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 space-y-3"
                >
                  <label className="text-sm font-medium text-black dark:text-white">
                    Recent Downloads
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {history.map((item, index) => (
                      <div
                        key={index}
                        className="aspect-square bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg p-1 overflow-hidden"
                      >
                        <img
                          src={item.dataUrl}
                          alt={item.label}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Guide Section */}
          <AnimatePresence>
            {showGuide && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="border-t border-neutral-200 dark:border-neutral-800 pt-8 space-y-4"
              >
                <h3 className="text-lg font-medium text-black dark:text-white">
                  How to Use
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      title: "1. Choose Type",
                      desc: "Select QR Code or Barcode mode",
                    },
                    {
                      title: "2. Enter Content",
                      desc: "Type URL, text, or barcode value",
                    },
                    {
                      title: "3. Customize",
                      desc: "Adjust colors, size, and style options",
                    },
                    {
                      title: "4. Download",
                      desc: "Save as PNG, JPEG, or copy to clipboard",
                    },
                  ].map((step) => (
                    <div
                      key={step.title}
                      className="p-4 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg"
                    >
                      <h4 className="font-medium text-black dark:text-white mb-2">
                        {step.title}
                      </h4>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Supported Barcode Formats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="border-t border-neutral-200 dark:border-neutral-800 pt-12 space-y-6"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-black dark:text-white mb-2">
                Supported Barcode Formats
              </h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-500">
                Generate professional barcodes for any industry
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-5 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-2xl space-y-2">
                <h3 className="font-medium text-black dark:text-white">
                  CODE128
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Universal format for logistics, shipping, and product identification
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-2xl space-y-2">
                <h3 className="font-medium text-black dark:text-white">
                  UPC-A
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Retail standard for North American products and point-of-sale systems
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-2xl space-y-2">
                <h3 className="font-medium text-black dark:text-white">
                  EAN-13
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  International retail products, widely used in Europe and worldwide
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-2xl space-y-2">
                <h3 className="font-medium text-black dark:text-white">
                  CODE39
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Industrial and military applications, alphanumeric support
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-2xl space-y-2">
                <h3 className="font-medium text-black dark:text-white">
                  ITF-14
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Shipping containers and packaging in distribution
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-2xl space-y-2">
                <h3 className="font-medium text-black dark:text-white">
                  Pharmacode
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Pharmaceutical packaging and medication identification
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl">
              <h2 className="text-lg font-medium text-black dark:text-white mb-3">
                Free QR Code Generator - No Watermarks, No Sign-up Required
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                Create custom QR codes for websites, WiFi networks, vCards, and more. Our tool generates high-resolution QR codes without watermarks, completely free. 
                All processing happens in your browser for maximum privacy and speed.
              </p>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <span>No watermarks on generated QR codes and barcodes</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <span>No sign-up or registration required</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <span>Unlimited QR code and barcode generation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <span>Customizable colors, sizes, and error correction levels</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <span>Download as high-resolution PNG images</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center py-8"
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-16 bg-neutral-200 dark:bg-neutral-800" />
              <div className="flex gap-1">
                <div className="w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                <div className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                <div className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
              </div>
              <div className="h-px w-16 bg-neutral-200 dark:bg-neutral-800" />
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-600">
              Bit Labs
            </p>
          </motion.div>
        </div>
      </div>

      <style>{`
        .nothing-scrollbar::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .nothing-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .nothing-scrollbar::-webkit-scrollbar-thumb {
          background: #000;
          border-radius: 0;
        }
        .dark .nothing-scrollbar::-webkit-scrollbar-thumb {
          background: #fff;
        }
      `}</style>
    </div>
  );
}
