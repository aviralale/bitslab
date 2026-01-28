import QRCode from "qrcode";
import JsBarcode from "jsbarcode";

export type QRDotStyle =
  | "square"
  | "rounded"
  | "dots"
  | "classy"
  | "classy-rounded"
  | "extra-rounded"
  | "diamond"
  | "star";
export type QRCornerSquareStyle =
  | "square"
  | "rounded"
  | "dot"
  | "extra-rounded";
export type QRCornerDotStyle = "square" | "dot";

export interface QROptions {
  text: string;
  size?: number;
  fgColor?: string;
  bgColor?: string;
  errorCorrectionLevel?: "L" | "M" | "Q" | "H";
  logoDataUrl?: string;
  logoSizeRatio?: number;
  margin?: number;
  dotStyle?: QRDotStyle;
  cornerSquareStyle?: QRCornerSquareStyle;
  cornerDotStyle?: QRCornerDotStyle;
}

export interface BarcodeOptions {
  text: string;
  format?: string;
  width?: number;
  height?: number;
  displayValue?: boolean;
  fontSize?: number;
  lineColor?: string;
  background?: string;
}

// Helper to draw different dot shapes
function drawDot(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  style: QRDotStyle,
  color: string,
) {
  ctx.fillStyle = color;
  const half = size / 2;

  switch (style) {
    case "square":
      ctx.fillRect(x, y, size, size);
      break;

    case "rounded":
      ctx.beginPath();
      ctx.roundRect(x, y, size, size, size * 0.25);
      ctx.fill();
      break;

    case "dots":
      ctx.beginPath();
      ctx.arc(x + half, y + half, half * 0.85, 0, 2 * Math.PI);
      ctx.fill();
      break;

    case "classy":
      // Square with one rounded corner
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + size, y);
      ctx.lineTo(x + size, y + size);
      ctx.lineTo(x + half, y + size);
      ctx.quadraticCurveTo(x, y + size, x, y + half);
      ctx.closePath();
      ctx.fill();
      break;

    case "classy-rounded":
      // Rounded with extra curve
      ctx.beginPath();
      ctx.roundRect(x, y, size, size, [0, size * 0.4, 0, size * 0.4]);
      ctx.fill();
      break;

    case "extra-rounded":
      ctx.beginPath();
      ctx.roundRect(x, y, size, size, size * 0.5);
      ctx.fill();
      break;

    case "diamond":
      ctx.beginPath();
      ctx.moveTo(x + half, y);
      ctx.lineTo(x + size, y + half);
      ctx.lineTo(x + half, y + size);
      ctx.lineTo(x, y + half);
      ctx.closePath();
      ctx.fill();
      break;

    case "star":
      ctx.beginPath();
      const spikes = 4;
      const outerRadius = half * 0.9;
      const innerRadius = half * 0.4;
      const cx = x + half;
      const cy = y + half;
      for (let i = 0; i < spikes * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const angle = (i * Math.PI) / spikes - Math.PI / 2;
        const px = cx + Math.cos(angle) * radius;
        const py = cy + Math.sin(angle) * radius;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fill();
      break;

    default:
      ctx.fillRect(x, y, size, size);
  }
}

// Helper to draw corner squares (the big positioning squares)
function drawCornerSquare(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  style: QRCornerSquareStyle,
  color: string,
  bgColor: string,
) {
  const moduleSize = size / 7;

  ctx.fillStyle = color;

  switch (style) {
    case "square":
      // Outer square
      ctx.fillRect(x, y, size, size);
      // Inner cut (white)
      ctx.fillStyle = bgColor;
      ctx.fillRect(
        x + moduleSize,
        y + moduleSize,
        size - moduleSize * 2,
        size - moduleSize * 2,
      );
      break;

    case "rounded":
      // Outer rounded square
      ctx.beginPath();
      ctx.roundRect(x, y, size, size, size * 0.2);
      ctx.fill();
      // Inner cut
      ctx.fillStyle = bgColor;
      ctx.beginPath();
      ctx.roundRect(
        x + moduleSize,
        y + moduleSize,
        size - moduleSize * 2,
        size - moduleSize * 2,
        size * 0.1,
      );
      ctx.fill();
      break;

    case "extra-rounded":
      // Outer extra rounded
      ctx.beginPath();
      ctx.roundRect(x, y, size, size, size * 0.4);
      ctx.fill();
      // Inner cut
      ctx.fillStyle = bgColor;
      ctx.beginPath();
      ctx.roundRect(
        x + moduleSize,
        y + moduleSize,
        size - moduleSize * 2,
        size - moduleSize * 2,
        size * 0.25,
      );
      ctx.fill();
      break;

    case "dot":
      // Outer circle
      ctx.beginPath();
      ctx.arc(x + size / 2, y + size / 2, size / 2, 0, 2 * Math.PI);
      ctx.fill();
      // Inner cut
      ctx.fillStyle = bgColor;
      ctx.beginPath();
      ctx.arc(
        x + size / 2,
        y + size / 2,
        size / 2 - moduleSize,
        0,
        2 * Math.PI,
      );
      ctx.fill();
      break;
  }
}

// Helper to draw corner dots (the center of positioning squares)
function drawCornerDot(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  style: QRCornerDotStyle,
  color: string,
) {
  ctx.fillStyle = color;

  switch (style) {
    case "square":
      ctx.fillRect(x, y, size, size);
      break;
    case "dot":
      ctx.beginPath();
      ctx.arc(x + size / 2, y + size / 2, size / 2, 0, 2 * Math.PI);
      ctx.fill();
      break;
  }
}

// Check if a module is part of a finder pattern (corner squares)
function isFinderPattern(
  row: number,
  col: number,
  moduleCount: number,
): boolean {
  // Top-left
  if (row < 7 && col < 7) return true;
  // Top-right
  if (row < 7 && col >= moduleCount - 7) return true;
  // Bottom-left
  if (row >= moduleCount - 7 && col < 7) return true;
  return false;
}

export async function generateQRCode(options: QROptions): Promise<string> {
  const {
    text,
    size = 256,
    fgColor = "#000",
    bgColor = "#fff",
    errorCorrectionLevel = "M",
    margin = 2,
    dotStyle = "square",
    cornerSquareStyle = "square",
    cornerDotStyle = "square",
  } = options;

  // If using default square style, use the faster library method
  if (
    dotStyle === "square" &&
    cornerSquareStyle === "square" &&
    cornerDotStyle === "square"
  ) {
    return QRCode.toDataURL(text, {
      width: size,
      color: {
        dark: fgColor,
        light: bgColor,
      },
      errorCorrectionLevel,
      margin,
    });
  }

  // For custom styles, generate matrix and draw manually
  const qrData = await QRCode.create(text, { errorCorrectionLevel });
  const moduleCount = qrData.modules.size;
  const moduleData = qrData.modules.data;

  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Could not get canvas context");

  // Calculate module size accounting for margin
  const totalModules = moduleCount + margin * 2;
  const moduleSize = size / totalModules;
  const offset = margin * moduleSize;

  // Fill background
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, size, size);

  // Draw regular modules (not finder patterns)
  for (let row = 0; row < moduleCount; row++) {
    for (let col = 0; col < moduleCount; col++) {
      const idx = row * moduleCount + col;
      const isDark = moduleData[idx];

      if (isDark && !isFinderPattern(row, col, moduleCount)) {
        const x = offset + col * moduleSize;
        const y = offset + row * moduleSize;
        drawDot(ctx, x, y, moduleSize, dotStyle, fgColor);
      }
    }
  }

  // Draw finder patterns (corner squares)
  const finderSize = 7 * moduleSize;
  const finderPositions = [
    { x: offset, y: offset }, // Top-left
    { x: offset + (moduleCount - 7) * moduleSize, y: offset }, // Top-right
    { x: offset, y: offset + (moduleCount - 7) * moduleSize }, // Bottom-left
  ];

  for (const pos of finderPositions) {
    drawCornerSquare(
      ctx,
      pos.x,
      pos.y,
      finderSize,
      cornerSquareStyle,
      fgColor,
      bgColor,
    );
    // Draw center dot
    const centerSize = 3 * moduleSize;
    const centerOffset = 2 * moduleSize;
    drawCornerDot(
      ctx,
      pos.x + centerOffset,
      pos.y + centerOffset,
      centerSize,
      cornerDotStyle,
      fgColor,
    );
  }

  return canvas.toDataURL("image/png");
}

export function generateBarcode(
  options: BarcodeOptions,
  canvas: HTMLCanvasElement,
) {
  const {
    text,
    format = "CODE128",
    width = 2,
    height = 100,
    displayValue = true,
    fontSize = 20,
    lineColor = "#000",
    background = "#fff",
  } = options;
  JsBarcode(canvas, text, {
    format,
    width,
    height,
    displayValue,
    fontSize,
    lineColor,
    background,
    margin: 10,
  });
}
