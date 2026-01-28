import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ColorPicker } from "@/components/ui/color-picker";
import {
  FileText,
  Plus,
  Trash2,
  Download,
  RotateCcw,
  HelpCircle,
  Building2,
  User,
  Printer,
  Eye,
  Palette,
  Settings2,
} from "lucide-react";

interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

interface InvoiceData {
  // Business Info
  businessName: string;
  businessAddress: string;
  businessEmail: string;
  businessPhone: string;
  businessLogo?: string;

  // Client Info
  clientName: string;
  clientAddress: string;
  clientEmail: string;

  // Invoice Details
  invoiceNumber: string;
  invoiceDate: string;
  dueDate: string;

  // Items
  items: InvoiceItem[];

  // Totals
  subtotal: number;
  taxRate: number;
  taxAmount: number;
  discountRate: number;
  discountAmount: number;
  total: number;

  // Additional
  notes: string;
  terms: string;
  currency: string;
}

interface InvoiceStyle {
  accentColor: string;
  fontFamily: string;
  showLogo: boolean;
  showWatermark: boolean;
}

interface PrintSettings {
  pageSize: "a4" | "letter" | "legal" | "a5" | "custom";
  orientation: "portrait" | "landscape";
  customWidth: number;
  customHeight: number;
  unit: "in" | "cm" | "mm";
}

const pageSizes = [
  { id: "a4", name: "A4", width: 210, height: 297, unit: "mm" },
  { id: "letter", name: "Letter", width: 8.5, height: 11, unit: "in" },
  { id: "legal", name: "Legal", width: 8.5, height: 14, unit: "in" },
  { id: "a5", name: "A5", width: 148, height: 210, unit: "mm" },
  { id: "custom", name: "Custom", width: 0, height: 0, unit: "in" },
];

const defaultPrintSettings: PrintSettings = {
  pageSize: "a4",
  orientation: "portrait",
  customWidth: 8.5,
  customHeight: 11,
  unit: "in",
};

const currencies = [
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "NPR", symbol: "रू", name: "Nepali Rupee" },
  { code: "INR", symbol: "₹", name: "Indian Rupee" },
  { code: "AUD", symbol: "A$", name: "Australian Dollar" },
  { code: "CAD", symbol: "C$", name: "Canadian Dollar" },
  { code: "JPY", symbol: "¥", name: "Japanese Yen" },
];

const defaultInvoice: InvoiceData = {
  businessName: "",
  businessAddress: "",
  businessEmail: "",
  businessPhone: "",
  businessLogo: undefined,
  clientName: "",
  clientAddress: "",
  clientEmail: "",
  invoiceNumber: `INV-${Date.now().toString().slice(-6)}`,
  invoiceDate: new Date().toISOString().split("T")[0],
  dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0],
  items: [{ id: "1", description: "", quantity: 1, rate: 0, amount: 0 }],
  subtotal: 0,
  taxRate: 0,
  taxAmount: 0,
  discountRate: 0,
  discountAmount: 0,
  total: 0,
  notes: "",
  terms: "Payment is due within 30 days of invoice date.",
  currency: "USD",
};

const defaultStyle: InvoiceStyle = {
  accentColor: "#000000",
  fontFamily: "Inter",
  showLogo: true,
  showWatermark: false,
};

export default function InvoiceGeneratorPage() {
  const [invoice, setInvoice] = useState<InvoiceData>(defaultInvoice);
  const [style, setStyle] = useState<InvoiceStyle>(defaultStyle);
  const [printSettings, setPrintSettings] =
    useState<PrintSettings>(defaultPrintSettings);
  const [activeTab, setActiveTab] = useState<
    "business" | "client" | "items" | "style" | "print"
  >("business");
  const [showGuide, setShowGuide] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const printRef = useRef<HTMLDivElement>(null);

  const currencySymbol =
    currencies.find((c) => c.code === invoice.currency)?.symbol || "$";

  // Calculate totals
  const calculateTotals = (items: InvoiceItem[]) => {
    const subtotal = items.reduce((sum, item) => sum + item.amount, 0);
    const discountAmount = (subtotal * invoice.discountRate) / 100;
    const afterDiscount = subtotal - discountAmount;
    const taxAmount = (afterDiscount * invoice.taxRate) / 100;
    const total = afterDiscount + taxAmount;

    setInvoice((prev) => ({
      ...prev,
      subtotal,
      discountAmount,
      taxAmount,
      total,
    }));
  };

  // Add item
  const addItem = () => {
    const newItem: InvoiceItem = {
      id: Date.now().toString(),
      description: "",
      quantity: 1,
      rate: 0,
      amount: 0,
    };
    const newItems = [...invoice.items, newItem];
    setInvoice((prev) => ({ ...prev, items: newItems }));
  };

  // Remove item
  const removeItem = (id: string) => {
    if (invoice.items.length === 1) return;
    const newItems = invoice.items.filter((item) => item.id !== id);
    setInvoice((prev) => ({ ...prev, items: newItems }));
    calculateTotals(newItems);
  };

  // Update item
  const updateItem = (
    id: string,
    field: keyof InvoiceItem,
    value: string | number,
  ) => {
    const newItems = invoice.items.map((item) => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value };
        if (field === "quantity" || field === "rate") {
          updatedItem.amount = updatedItem.quantity * updatedItem.rate;
        }
        return updatedItem;
      }
      return item;
    });
    setInvoice((prev) => ({ ...prev, items: newItems }));
    calculateTotals(newItems);
  };

  // Update tax/discount
  const updateRates = (field: "taxRate" | "discountRate", value: number) => {
    setInvoice((prev) => {
      const newInvoice = { ...prev, [field]: value };
      const discountAmount =
        (newInvoice.subtotal * newInvoice.discountRate) / 100;
      const afterDiscount = newInvoice.subtotal - discountAmount;
      const taxAmount = (afterDiscount * newInvoice.taxRate) / 100;
      const total = afterDiscount + taxAmount;
      return { ...newInvoice, discountAmount, taxAmount, total };
    });
  };

  // Handle logo upload
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setInvoice((prev) => ({
          ...prev,
          businessLogo: event.target?.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Clear all
  const clearAll = () => {
    setInvoice({
      ...defaultInvoice,
      invoiceNumber: `INV-${Date.now().toString().slice(-6)}`,
    });
    setStyle(defaultStyle);
    setPrintSettings(defaultPrintSettings);
  };

  // Get page size for CSS
  const getPageSizeCSS = () => {
    const { pageSize, orientation, customWidth, customHeight, unit } =
      printSettings;

    if (pageSize === "custom") {
      const width = orientation === "portrait" ? customWidth : customHeight;
      const height = orientation === "portrait" ? customHeight : customWidth;
      return `${width}${unit} ${height}${unit}`;
    }

    const size = pageSizes.find((s) => s.id === pageSize);
    if (!size) return "A4";

    if (orientation === "landscape") {
      return `${size.height}${size.unit} ${size.width}${size.unit}`;
    }
    return `${size.width}${size.unit} ${size.height}${size.unit}`;
  };

  // Print invoice
  const handlePrint = () => {
    window.print();
  };

  // Download as image (simplified - would use html2canvas in production)
  const handleDownload = () => {
    handlePrint(); // For now, use print dialog
  };

  const formatCurrency = (amount: number) => {
    return `${currencySymbol}${amount.toFixed(2)}`;
  };

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black">
      {/* Dot Matrix Background */}
      <div className="fixed inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none print:hidden">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative z-10 p-4 sm:p-6 lg:p-8 print:p-0">
        <div className="max-w-[1400px] mx-auto space-y-6 print:space-y-0">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 print:hidden"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-black dark:text-white mb-2">
              Invoice Generator
            </h1>
            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-12 bg-neutral-300 dark:bg-neutral-700" />
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
                Create • Customize • Download
              </p>
              <div className="h-px w-12 bg-neutral-300 dark:bg-neutral-700" />
            </div>
          </motion.div>

          {/* Header Controls */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="flex flex-wrap items-center justify-between gap-4 print:hidden"
          >
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
              <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                Invoice #{invoice.invoiceNumber}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowPreview(!showPreview)}
                className="gap-2 text-neutral-600 dark:text-neutral-400"
              >
                <Eye className="w-4 h-4" />
                {showPreview ? "Edit" : "Preview"}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAll}
                className="gap-2 text-neutral-600 dark:text-neutral-400"
              >
                <RotateCcw className="w-4 h-4" />
                Clear
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowGuide(!showGuide)}
                className="gap-2 text-neutral-600 dark:text-neutral-400"
              >
                <HelpCircle className="w-4 h-4" />
                Guide
              </Button>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 print:block">
            {/* Left - Form */}
            {!showPreview && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-6 print:hidden"
              >
                {/* Tab Navigation */}
                <div className="flex gap-1 p-1 bg-neutral-100 dark:bg-neutral-900 rounded-xl overflow-x-auto">
                  {[
                    { id: "business", label: "Business", icon: Building2 },
                    { id: "client", label: "Client", icon: User },
                    { id: "items", label: "Items", icon: FileText },
                    { id: "style", label: "Style", icon: Palette },
                    { id: "print", label: "Print", icon: Settings2 },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as typeof activeTab)}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
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

                <AnimatePresence mode="wait">
                  {/* Business Tab */}
                  {activeTab === "business" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-4"
                    >
                      <div className="bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 space-y-4">
                        <label className="text-sm font-medium text-black dark:text-white">
                          Your Business Details
                        </label>

                        {/* Logo Upload */}
                        <div className="space-y-2">
                          <span className="text-xs text-neutral-500">
                            Business Logo
                          </span>
                          {invoice.businessLogo ? (
                            <div className="flex items-center gap-3">
                              <img
                                src={invoice.businessLogo}
                                alt="Logo"
                                className="w-16 h-16 object-contain rounded-lg border border-neutral-200 dark:border-neutral-800"
                              />
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() =>
                                  setInvoice((prev) => ({
                                    ...prev,
                                    businessLogo: undefined,
                                  }))
                                }
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          ) : (
                            <label className="flex items-center justify-center gap-2 p-4 border-2 border-dashed border-neutral-300 dark:border-neutral-700 rounded-lg cursor-pointer hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
                              <Building2 className="w-5 h-5 text-neutral-400" />
                              <span className="text-sm text-neutral-500">
                                Upload logo
                              </span>
                              <input
                                type="file"
                                accept="image/*"
                                onChange={handleLogoUpload}
                                className="hidden"
                              />
                            </label>
                          )}
                        </div>

                        <input
                          type="text"
                          placeholder="Business Name"
                          value={invoice.businessName}
                          onChange={(e) =>
                            setInvoice((prev) => ({
                              ...prev,
                              businessName: e.target.value,
                            }))
                          }
                          className="w-full bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                        />
                        <textarea
                          placeholder="Business Address"
                          value={invoice.businessAddress}
                          onChange={(e) =>
                            setInvoice((prev) => ({
                              ...prev,
                              businessAddress: e.target.value,
                            }))
                          }
                          rows={2}
                          className="w-full bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white resize-none"
                        />
                        <div className="grid grid-cols-2 gap-3">
                          <input
                            type="email"
                            placeholder="Email"
                            value={invoice.businessEmail}
                            onChange={(e) =>
                              setInvoice((prev) => ({
                                ...prev,
                                businessEmail: e.target.value,
                              }))
                            }
                            className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                          />
                          <input
                            type="tel"
                            placeholder="Phone"
                            value={invoice.businessPhone}
                            onChange={(e) =>
                              setInvoice((prev) => ({
                                ...prev,
                                businessPhone: e.target.value,
                              }))
                            }
                            className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                          />
                        </div>
                      </div>

                      {/* Invoice Details */}
                      <div className="bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 space-y-4">
                        <label className="text-sm font-medium text-black dark:text-white">
                          Invoice Details
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="space-y-1">
                            <span className="text-xs text-neutral-500">
                              Invoice Number
                            </span>
                            <input
                              type="text"
                              value={invoice.invoiceNumber}
                              onChange={(e) =>
                                setInvoice((prev) => ({
                                  ...prev,
                                  invoiceNumber: e.target.value,
                                }))
                              }
                              className="w-full bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                            />
                          </div>
                          <div className="space-y-1">
                            <span className="text-xs text-neutral-500">
                              Currency
                            </span>
                            <select
                              value={invoice.currency}
                              onChange={(e) =>
                                setInvoice((prev) => ({
                                  ...prev,
                                  currency: e.target.value,
                                }))
                              }
                              className="w-full bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-2 text-sm"
                            >
                              {currencies.map((c) => (
                                <option key={c.code} value={c.code}>
                                  {c.symbol} {c.code}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="space-y-1">
                            <span className="text-xs text-neutral-500">
                              Invoice Date
                            </span>
                            <input
                              type="date"
                              value={invoice.invoiceDate}
                              onChange={(e) =>
                                setInvoice((prev) => ({
                                  ...prev,
                                  invoiceDate: e.target.value,
                                }))
                              }
                              className="w-full bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-2 text-sm"
                            />
                          </div>
                          <div className="space-y-1">
                            <span className="text-xs text-neutral-500">
                              Due Date
                            </span>
                            <input
                              type="date"
                              value={invoice.dueDate}
                              onChange={(e) =>
                                setInvoice((prev) => ({
                                  ...prev,
                                  dueDate: e.target.value,
                                }))
                              }
                              className="w-full bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-2 text-sm"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Client Tab */}
                  {activeTab === "client" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-4"
                    >
                      <div className="bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 space-y-4">
                        <label className="text-sm font-medium text-black dark:text-white">
                          Bill To
                        </label>
                        <input
                          type="text"
                          placeholder="Client Name / Company"
                          value={invoice.clientName}
                          onChange={(e) =>
                            setInvoice((prev) => ({
                              ...prev,
                              clientName: e.target.value,
                            }))
                          }
                          className="w-full bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                        />
                        <textarea
                          placeholder="Client Address"
                          value={invoice.clientAddress}
                          onChange={(e) =>
                            setInvoice((prev) => ({
                              ...prev,
                              clientAddress: e.target.value,
                            }))
                          }
                          rows={2}
                          className="w-full bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white resize-none"
                        />
                        <input
                          type="email"
                          placeholder="Client Email"
                          value={invoice.clientEmail}
                          onChange={(e) =>
                            setInvoice((prev) => ({
                              ...prev,
                              clientEmail: e.target.value,
                            }))
                          }
                          className="w-full bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                        />
                      </div>

                      {/* Notes & Terms */}
                      <div className="bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 space-y-4">
                        <label className="text-sm font-medium text-black dark:text-white">
                          Notes & Terms
                        </label>
                        <div className="space-y-1">
                          <span className="text-xs text-neutral-500">
                            Notes
                          </span>
                          <textarea
                            placeholder="Additional notes for the client..."
                            value={invoice.notes}
                            onChange={(e) =>
                              setInvoice((prev) => ({
                                ...prev,
                                notes: e.target.value,
                              }))
                            }
                            rows={2}
                            className="w-full bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white resize-none"
                          />
                        </div>
                        <div className="space-y-1">
                          <span className="text-xs text-neutral-500">
                            Terms & Conditions
                          </span>
                          <textarea
                            placeholder="Payment terms..."
                            value={invoice.terms}
                            onChange={(e) =>
                              setInvoice((prev) => ({
                                ...prev,
                                terms: e.target.value,
                              }))
                            }
                            rows={2}
                            className="w-full bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white resize-none"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Items Tab */}
                  {activeTab === "items" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-4"
                    >
                      <div className="bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 space-y-4">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium text-black dark:text-white">
                            Line Items
                          </label>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={addItem}
                            className="gap-1"
                          >
                            <Plus className="w-4 h-4" />
                            Add Item
                          </Button>
                        </div>

                        <div className="space-y-3">
                          {invoice.items.map((item, index) => (
                            <div
                              key={item.id}
                              className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 space-y-2"
                            >
                              <div className="flex items-start gap-2">
                                <span className="text-xs text-neutral-400 mt-2">
                                  {index + 1}.
                                </span>
                                <div className="flex-1 space-y-2">
                                  <input
                                    type="text"
                                    placeholder="Item description"
                                    value={item.description}
                                    onChange={(e) =>
                                      updateItem(
                                        item.id,
                                        "description",
                                        e.target.value,
                                      )
                                    }
                                    className="w-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-2 text-sm"
                                  />
                                  <div className="grid grid-cols-3 gap-2">
                                    <div className="space-y-1">
                                      <span className="text-xs text-neutral-500">
                                        Qty
                                      </span>
                                      <input
                                        type="number"
                                        min={1}
                                        value={item.quantity}
                                        onChange={(e) =>
                                          updateItem(
                                            item.id,
                                            "quantity",
                                            parseInt(e.target.value) || 0,
                                          )
                                        }
                                        className="w-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-2 text-sm"
                                      />
                                    </div>
                                    <div className="space-y-1">
                                      <span className="text-xs text-neutral-500">
                                        Rate ({currencySymbol})
                                      </span>
                                      <input
                                        type="number"
                                        min={0}
                                        step={0.01}
                                        value={item.rate}
                                        onChange={(e) =>
                                          updateItem(
                                            item.id,
                                            "rate",
                                            parseFloat(e.target.value) || 0,
                                          )
                                        }
                                        className="w-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-2 text-sm"
                                      />
                                    </div>
                                    <div className="space-y-1">
                                      <span className="text-xs text-neutral-500">
                                        Amount
                                      </span>
                                      <div className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-2 text-sm font-medium">
                                        {formatCurrency(item.amount)}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {invoice.items.length > 1 && (
                                  <Button
                                    size="sm"
                                    variant="ghost"
                                    onClick={() => removeItem(item.id)}
                                    className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tax & Discount */}
                      <div className="bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 space-y-4">
                        <label className="text-sm font-medium text-black dark:text-white">
                          Tax & Discount
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs text-neutral-500">
                              <span>Tax Rate</span>
                              <span>{invoice.taxRate}%</span>
                            </div>
                            <Slider
                              min={0}
                              max={30}
                              step={0.5}
                              value={[invoice.taxRate]}
                              onValueChange={([val]) =>
                                updateRates("taxRate", val)
                              }
                              className="w-full"
                            />
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs text-neutral-500">
                              <span>Discount</span>
                              <span>{invoice.discountRate}%</span>
                            </div>
                            <Slider
                              min={0}
                              max={50}
                              step={1}
                              value={[invoice.discountRate]}
                              onValueChange={([val]) =>
                                updateRates("discountRate", val)
                              }
                              className="w-full"
                            />
                          </div>
                        </div>

                        {/* Totals Summary */}
                        <div className="border-t border-neutral-200 dark:border-neutral-800 pt-4 space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-neutral-500">Subtotal</span>
                            <span>{formatCurrency(invoice.subtotal)}</span>
                          </div>
                          {invoice.discountRate > 0 && (
                            <div className="flex justify-between text-sm text-green-600">
                              <span>Discount ({invoice.discountRate}%)</span>
                              <span>
                                -{formatCurrency(invoice.discountAmount)}
                              </span>
                            </div>
                          )}
                          {invoice.taxRate > 0 && (
                            <div className="flex justify-between text-sm">
                              <span className="text-neutral-500">
                                Tax ({invoice.taxRate}%)
                              </span>
                              <span>{formatCurrency(invoice.taxAmount)}</span>
                            </div>
                          )}
                          <div className="flex justify-between text-lg font-semibold pt-2 border-t border-neutral-200 dark:border-neutral-800">
                            <span>Total</span>
                            <span>{formatCurrency(invoice.total)}</span>
                          </div>
                        </div>
                      </div>
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
                      <div className="bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 space-y-4">
                        <label className="text-sm font-medium text-black dark:text-white">
                          Invoice Style
                        </label>

                        <div className="space-y-2">
                          <span className="text-xs text-neutral-500">
                            Accent Color
                          </span>
                          <div className="flex items-center gap-3">
                            <ColorPicker
                              value={style.accentColor}
                              onChange={(color) =>
                                setStyle((prev) => ({
                                  ...prev,
                                  accentColor: color,
                                }))
                              }
                            />
                            <span className="text-sm font-mono">
                              {style.accentColor}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <span className="text-xs text-neutral-500">
                            Quick Colors
                          </span>
                          <div className="flex gap-2 flex-wrap">
                            {[
                              "#000000",
                              "#2563eb",
                              "#16a34a",
                              "#dc2626",
                              "#9333ea",
                              "#ea580c",
                              "#0891b2",
                              "#4f46e5",
                            ].map((color) => (
                              <button
                                key={color}
                                onClick={() =>
                                  setStyle((prev) => ({
                                    ...prev,
                                    accentColor: color,
                                  }))
                                }
                                className={`w-8 h-8 rounded-lg border-2 transition-all ${
                                  style.accentColor === color
                                    ? "border-black dark:border-white scale-110"
                                    : "border-neutral-200 dark:border-neutral-800"
                                }`}
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>
                        </div>

                        <div className="space-y-3 pt-2">
                          <label className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={style.showLogo}
                              onChange={(e) =>
                                setStyle((prev) => ({
                                  ...prev,
                                  showLogo: e.target.checked,
                                }))
                              }
                              className="w-4 h-4 rounded"
                            />
                            <span className="text-sm">Show Logo</span>
                          </label>
                          <label className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={style.showWatermark}
                              onChange={(e) =>
                                setStyle((prev) => ({
                                  ...prev,
                                  showWatermark: e.target.checked,
                                }))
                              }
                              className="w-4 h-4 rounded"
                            />
                            <span className="text-sm">
                              Show "Created with BitsLab" Watermark
                            </span>
                          </label>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Print Tab */}
                  {activeTab === "print" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-4"
                    >
                      <div className="bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 space-y-4">
                        <label className="text-sm font-medium text-black dark:text-white">
                          Page Settings
                        </label>

                        {/* Page Size */}
                        <div className="space-y-2">
                          <span className="text-xs text-neutral-500">
                            Page Size
                          </span>
                          <div className="grid grid-cols-3 gap-2">
                            {pageSizes.map((size) => (
                              <button
                                key={size.id}
                                onClick={() =>
                                  setPrintSettings((prev) => ({
                                    ...prev,
                                    pageSize:
                                      size.id as PrintSettings["pageSize"],
                                  }))
                                }
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                                  printSettings.pageSize === size.id
                                    ? "bg-black dark:bg-white text-white dark:text-black"
                                    : "bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600"
                                }`}
                              >
                                {size.name}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Orientation */}
                        <div className="space-y-2">
                          <span className="text-xs text-neutral-500">
                            Orientation
                          </span>
                          <div className="grid grid-cols-2 gap-2">
                            {[
                              { id: "portrait", label: "Portrait", icon: "📄" },
                              {
                                id: "landscape",
                                label: "Landscape",
                                icon: "📃",
                              },
                            ].map((opt) => (
                              <button
                                key={opt.id}
                                onClick={() =>
                                  setPrintSettings((prev) => ({
                                    ...prev,
                                    orientation: opt.id as
                                      | "portrait"
                                      | "landscape",
                                  }))
                                }
                                className={`flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                                  printSettings.orientation === opt.id
                                    ? "bg-black dark:bg-white text-white dark:text-black"
                                    : "bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600"
                                }`}
                              >
                                <span>{opt.icon}</span>
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Custom Size Options */}
                        {printSettings.pageSize === "custom" && (
                          <div className="space-y-3 pt-2 border-t border-neutral-200 dark:border-neutral-800">
                            <span className="text-xs text-neutral-500">
                              Custom Dimensions
                            </span>

                            {/* Unit Selection */}
                            <div className="space-y-1">
                              <span className="text-xs text-neutral-400">
                                Unit
                              </span>
                              <div className="flex gap-2">
                                {[
                                  { id: "in", label: "Inches" },
                                  { id: "cm", label: "Centimeters" },
                                  { id: "mm", label: "Millimeters" },
                                ].map((u) => (
                                  <button
                                    key={u.id}
                                    onClick={() =>
                                      setPrintSettings((prev) => ({
                                        ...prev,
                                        unit: u.id as "in" | "cm" | "mm",
                                      }))
                                    }
                                    className={`flex-1 px-2 py-1.5 rounded-lg text-xs font-medium transition-all ${
                                      printSettings.unit === u.id
                                        ? "bg-black dark:bg-white text-white dark:text-black"
                                        : "bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800"
                                    }`}
                                  >
                                    {u.label}
                                  </button>
                                ))}
                              </div>
                            </div>

                            {/* Width & Height */}
                            <div className="grid grid-cols-2 gap-3">
                              <div className="space-y-1">
                                <span className="text-xs text-neutral-400">
                                  Width ({printSettings.unit})
                                </span>
                                <input
                                  type="number"
                                  min={1}
                                  step={0.1}
                                  value={printSettings.customWidth}
                                  onChange={(e) =>
                                    setPrintSettings((prev) => ({
                                      ...prev,
                                      customWidth:
                                        parseFloat(e.target.value) || 0,
                                    }))
                                  }
                                  className="w-full bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-2 text-sm"
                                />
                              </div>
                              <div className="space-y-1">
                                <span className="text-xs text-neutral-400">
                                  Height ({printSettings.unit})
                                </span>
                                <input
                                  type="number"
                                  min={1}
                                  step={0.1}
                                  value={printSettings.customHeight}
                                  onChange={(e) =>
                                    setPrintSettings((prev) => ({
                                      ...prev,
                                      customHeight:
                                        parseFloat(e.target.value) || 0,
                                    }))
                                  }
                                  className="w-full bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-2 text-sm"
                                />
                              </div>
                            </div>

                            {/* Quick Presets for Custom */}
                            <div className="space-y-1">
                              <span className="text-xs text-neutral-400">
                                Quick Presets
                              </span>
                              <div className="flex gap-2 flex-wrap">
                                {[
                                  {
                                    label: '4×6"',
                                    w: 4,
                                    h: 6,
                                    u: "in" as const,
                                  },
                                  {
                                    label: '5×7"',
                                    w: 5,
                                    h: 7,
                                    u: "in" as const,
                                  },
                                  {
                                    label: '8×10"',
                                    w: 8,
                                    h: 10,
                                    u: "in" as const,
                                  },
                                  {
                                    label: "10×15cm",
                                    w: 10,
                                    h: 15,
                                    u: "cm" as const,
                                  },
                                  {
                                    label: "20×30cm",
                                    w: 20,
                                    h: 30,
                                    u: "cm" as const,
                                  },
                                ].map((preset) => (
                                  <button
                                    key={preset.label}
                                    onClick={() =>
                                      setPrintSettings((prev) => ({
                                        ...prev,
                                        customWidth: preset.w,
                                        customHeight: preset.h,
                                        unit: preset.u,
                                      }))
                                    }
                                    className="px-2 py-1 text-xs bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
                                  >
                                    {preset.label}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Current Settings Preview */}
                      <div className="bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 space-y-2">
                        <label className="text-sm font-medium text-black dark:text-white">
                          Current Print Settings
                        </label>
                        <div className="text-xs text-neutral-500 space-y-1">
                          <p>
                            <span className="text-neutral-400">Size:</span>{" "}
                            {printSettings.pageSize === "custom"
                              ? `${printSettings.customWidth} × ${printSettings.customHeight} ${printSettings.unit}`
                              : pageSizes.find(
                                  (s) => s.id === printSettings.pageSize,
                                )?.name}
                          </p>
                          <p>
                            <span className="text-neutral-400">
                              Orientation:
                            </span>{" "}
                            {printSettings.orientation.charAt(0).toUpperCase() +
                              printSettings.orientation.slice(1)}
                          </p>
                          <p className="font-mono text-[10px] text-neutral-400 pt-1">
                            CSS: @page &#123; size: {getPageSizeCSS()} &#125;
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

            {/* Right - Preview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className={`space-y-4 ${showPreview ? "lg:col-span-2" : ""}`}
            >
              {/* Preview Header */}
              <div className="flex items-center justify-between print:hidden">
                <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  Preview
                </span>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={handlePrint}
                    className="gap-2"
                  >
                    <Printer className="w-4 h-4" />
                    Print
                  </Button>
                  <Button
                    size="sm"
                    onClick={handleDownload}
                    className="gap-2 bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                </div>
              </div>

              {/* Invoice Preview */}
              <div
                ref={printRef}
                data-print-area
                style={
                  { "--accent-color": style.accentColor } as React.CSSProperties
                }
                className="bg-white border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-lg print:shadow-none print:border-0 print:rounded-none"
              >
                <div data-print-content className="p-8 space-y-8 print:p-12">
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      {style.showLogo && invoice.businessLogo && (
                        <img
                          src={invoice.businessLogo}
                          alt="Logo"
                          className="h-12 mb-2 object-contain"
                        />
                      )}
                      <h2
                        className="text-xl font-bold"
                        style={{ color: style.accentColor }}
                      >
                        {invoice.businessName || "Your Business Name"}
                      </h2>
                      <p className="text-sm text-neutral-500 whitespace-pre-line">
                        {invoice.businessAddress || "Business Address"}
                      </p>
                      {invoice.businessEmail && (
                        <p className="text-sm text-neutral-500">
                          {invoice.businessEmail}
                        </p>
                      )}
                      {invoice.businessPhone && (
                        <p className="text-sm text-neutral-500">
                          {invoice.businessPhone}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <h1
                        className="text-3xl font-bold mb-2"
                        style={{ color: style.accentColor }}
                      >
                        INVOICE
                      </h1>
                      <p className="text-sm text-neutral-500">
                        #{invoice.invoiceNumber}
                      </p>
                      <p className="text-sm text-neutral-500">
                        Date: {invoice.invoiceDate}
                      </p>
                      <p className="text-sm text-neutral-500">
                        Due: {invoice.dueDate}
                      </p>
                    </div>
                  </div>

                  {/* Bill To */}
                  <div
                    className="p-4 rounded-lg print-bill-to"
                    style={
                      {
                        backgroundColor: `${style.accentColor}10`,
                        // @ts-ignore - CSS variable for print
                        "--accent-bg": `${style.accentColor}15`,
                      } as React.CSSProperties
                    }
                  >
                    <p
                      className="text-xs font-semibold uppercase tracking-wider mb-2"
                      style={{ color: style.accentColor }}
                    >
                      Bill To
                    </p>
                    <p className="font-semibold">
                      {invoice.clientName || "Client Name"}
                    </p>
                    <p className="text-sm text-neutral-500 whitespace-pre-line">
                      {invoice.clientAddress || "Client Address"}
                    </p>
                    {invoice.clientEmail && (
                      <p className="text-sm text-neutral-500">
                        {invoice.clientEmail}
                      </p>
                    )}
                  </div>

                  {/* Items Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr
                          style={
                            {
                              backgroundColor: style.accentColor,
                              // @ts-ignore - CSS variable for print
                              "--accent-color": style.accentColor,
                            } as React.CSSProperties
                          }
                          className="text-white"
                        >
                          <th className="text-left p-3 rounded-tl-lg">
                            Description
                          </th>
                          <th className="text-center p-3 w-20">Qty</th>
                          <th className="text-right p-3 w-28">Rate</th>
                          <th className="text-right p-3 w-28 rounded-tr-lg">
                            Amount
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {invoice.items.map((item, index) => (
                          <tr
                            key={item.id}
                            className={
                              index % 2 === 0 ? "bg-neutral-50" : "bg-white"
                            }
                          >
                            <td className="p-3">
                              {item.description || "Item description"}
                            </td>
                            <td className="p-3 text-center">{item.quantity}</td>
                            <td className="p-3 text-right">
                              {formatCurrency(item.rate)}
                            </td>
                            <td className="p-3 text-right font-medium">
                              {formatCurrency(item.amount)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Totals */}
                  <div className="flex justify-end">
                    <div className="w-64 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-neutral-500">Subtotal</span>
                        <span>{formatCurrency(invoice.subtotal)}</span>
                      </div>
                      {invoice.discountRate > 0 && (
                        <div className="flex justify-between text-sm text-green-600">
                          <span>Discount ({invoice.discountRate}%)</span>
                          <span>-{formatCurrency(invoice.discountAmount)}</span>
                        </div>
                      )}
                      {invoice.taxRate > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-neutral-500">
                            Tax ({invoice.taxRate}%)
                          </span>
                          <span>{formatCurrency(invoice.taxAmount)}</span>
                        </div>
                      )}
                      <div
                        className="flex justify-between text-lg font-bold pt-2 border-t-2"
                        style={{ borderColor: style.accentColor }}
                      >
                        <span>Total</span>
                        <span style={{ color: style.accentColor }}>
                          {formatCurrency(invoice.total)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Notes & Terms */}
                  {(invoice.notes || invoice.terms) && (
                    <div className="border-t border-neutral-200 pt-6 space-y-4">
                      {invoice.notes && (
                        <div>
                          <p
                            className="text-xs font-semibold uppercase tracking-wider mb-1"
                            style={{ color: style.accentColor }}
                          >
                            Notes
                          </p>
                          <p className="text-sm text-neutral-600">
                            {invoice.notes}
                          </p>
                        </div>
                      )}
                      {invoice.terms && (
                        <div>
                          <p
                            className="text-xs font-semibold uppercase tracking-wider mb-1"
                            style={{ color: style.accentColor }}
                          >
                            Terms & Conditions
                          </p>
                          <p className="text-sm text-neutral-600">
                            {invoice.terms}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Watermark */}
                  {style.showWatermark && (
                    <div className="text-center pt-4 border-t border-neutral-100">
                      <p className="text-xs text-neutral-400">
                        Created with BitsLab Invoice Generator
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Guide Section */}
          <AnimatePresence>
            {showGuide && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="border-t border-neutral-200 dark:border-neutral-800 pt-8 space-y-4 print:hidden"
              >
                <h3 className="text-lg font-medium text-black dark:text-white">
                  How to Use
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      title: "1. Add Business Info",
                      desc: "Enter your business name, address, and upload your logo",
                    },
                    {
                      title: "2. Add Client Details",
                      desc: "Fill in your client's billing information",
                    },
                    {
                      title: "3. Add Line Items",
                      desc: "Add services/products with quantities and rates",
                    },
                    {
                      title: "4. Download",
                      desc: "Print or download your professional invoice",
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

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center py-8 print:hidden"
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

      {/* Print Styles */}
      <style>{`
        @media print {
          /* Force color printing */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          
          /* Reset page */
          @page {
            size: ${getPageSizeCSS()};
            margin: 10mm;
          }
          
          /* Hide everything except the invoice */
          body * {
            visibility: hidden;
          }
          
          /* Show only the invoice container and its children */
          [data-print-area],
          [data-print-area] * {
            visibility: visible;
          }
          
          /* Position invoice at top left */
          [data-print-area] {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            background: white !important;
            box-shadow: none !important;
            border: none !important;
            border-radius: 0 !important;
          }
          
          /* Ensure proper padding */
          [data-print-content] {
            padding: 40px 50px !important;
          }
          
          /* Fix text colors for print */
          .text-neutral-500 {
            color: #6b7280 !important;
          }
          
          .text-neutral-600 {
            color: #4b5563 !important;
          }
          
          .text-neutral-400 {
            color: #9ca3af !important;
          }
          
          /* Ensure table colors print correctly */
          table thead tr {
            background-color: var(--accent-color) !important;
          }
          
          table tbody tr:nth-child(even) {
            background-color: #f9fafb !important;
          }
          
          table tbody tr:nth-child(odd) {
            background-color: #ffffff !important;
          }
          
          /* Bill To section background */
          .print-bill-to {
            background-color: var(--accent-bg) !important;
          }
          
          /* Prevent page breaks in the middle of sections */
          table { page-break-inside: avoid; }
          .space-y-8 > * { page-break-inside: avoid; }
          
          /* Hide print:hidden elements */
          .print\\:hidden { display: none !important; }
        }
      `}</style>
    </div>
  );
}
