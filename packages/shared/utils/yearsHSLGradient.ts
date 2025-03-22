export class YearsHSLGradient {
    yearLow: number
    yearHigh: number
    private hueLow: number
    private hueHigh: number
    private saturationLow: number
    private saturationHigh: number
    private lightnessLow: number
    private lightnessHigh: number

    constructor(
        yearLow: number,
        yearHigh: number,
        colorLow: string,
        colorHigh: string
    ) {
        this.yearLow = yearLow
        this.yearHigh = yearHigh
        const [hueLow, saturationLow, lightnessLow] = this.parseHSL(colorLow)
        const [hueHigh, saturationHigh, lightnessHigh] =
            this.parseHSL(colorHigh)
        this.hueLow = hueLow
        this.hueHigh = hueHigh
        this.saturationLow = saturationLow
        this.saturationHigh = saturationHigh
        this.lightnessLow = lightnessLow
        this.lightnessHigh = lightnessHigh
    }

    private parseHSL(color: string): [number, number, number] {
        const match = color.match(/\d+/g)
        if (!match || match.length !== 3)
            throw new Error('Invalid color format')
        return [parseInt(match[0]), parseInt(match[1]!), parseInt(match[2]!)]
    }

    getColor(year: number): string {
        if (this.yearLow === this.yearHigh) {
            // If yearLow and yearHigh are the same, return colorLow
            return `hsl(${this.hueLow}, ${this.saturationLow}%, ${this.lightnessLow}%)`
        }

        // Clamp the year within the range [yearLow, yearHigh]
        const clampedYear = Math.max(
            this.yearLow,
            Math.min(year, this.yearHigh)
        )

        // Calculate the interpolation factor
        const factor =
            (clampedYear - this.yearLow) / (this.yearHigh - this.yearLow)

        // Interpolate the hue, saturation, and lightness
        const hue = Math.round(
            this.hueLow + (this.hueHigh - this.hueLow) * factor
        )
        const saturation = Math.round(
            this.saturationLow +
                (this.saturationHigh - this.saturationLow) * factor
        )
        const lightness = Math.round(
            this.lightnessLow +
                (this.lightnessHigh - this.lightnessLow) * factor
        )

        // Return the interpolated color in the CSS HSL format
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`
    }
}
