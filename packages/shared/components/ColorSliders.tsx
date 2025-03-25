"use client";

import { useState } from "react";

const onColorChange = (newColor: string) =>
    (document.body.style.backgroundColor = newColor);

export function ColorSliders() {
    const [rgb, setRgb] = useState({ r: 0, g: 0, b: 0 });
    const [hex, setHex] = useState("#000000");

    const padHex = (n: string): string => (n.length < 2 ? "0" + n : n);

    const updateColor = (newRgb: typeof rgb) => {
        const r_hex = newRgb.r.toString(16);
        const g_hex = newRgb.g.toString(16);
        const b_hex = newRgb.b.toString(16);
        const newHex = `#${padHex(r_hex)}${padHex(g_hex)}${padHex(b_hex)}`;
        setHex(newHex);
        onColorChange(newHex);
    };

    const handleSliderChange = (color: "r" | "g" | "b", value: string) => {
        const newRgb = { ...rgb, [color]: parseInt(value) };
        setRgb(newRgb);
        updateColor(newRgb);
    };

    return (
        <div className="p-4 space-y-4">
            {/* Red Slider */}
            <fieldset className="border-none">
                <label
                    htmlFor="r"
                    className="px-2 py-1 rounded bg-red-500 text-black inline-block min-w-[2.5em]"
                >
                    R
                </label>
                <input
                    type="range"
                    min="0"
                    max="255"
                    id="r"
                    value={rgb.r}
                    onChange={(e) => handleSliderChange("r", e.target.value)}
                    className="w-4/5 mx-2"
                />
                <output
                    htmlFor="r"
                    className="px-2 py-1 rounded bg-red-500 text-black inline-block min-w-[2.5em]"
                >
                    {rgb.r}
                </output>
            </fieldset>

            {/* Green Slider */}
            <fieldset className="border-none">
                <label
                    htmlFor="g"
                    className="px-2 py-1 rounded bg-green-500 text-black inline-block min-w-[2.5em]"
                >
                    G
                </label>
                <input
                    type="range"
                    min="0"
                    max="255"
                    id="g"
                    value={rgb.g}
                    onChange={(e) => handleSliderChange("g", e.target.value)}
                    className="w-4/5 mx-2"
                />
                <output
                    htmlFor="g"
                    className="px-2 py-1 rounded bg-green-500 text-black inline-block min-w-[2.5em]"
                >
                    {rgb.g}
                </output>
            </fieldset>

            {/* Blue Slider */}
            <fieldset className="border-none">
                <label
                    htmlFor="b"
                    className="px-2 py-1 rounded bg-blue-500 text-black inline-block min-w-[2.5em]"
                >
                    B
                </label>
                <input
                    type="range"
                    min="0"
                    max="255"
                    id="b"
                    value={rgb.b}
                    onChange={(e) => handleSliderChange("b", e.target.value)}
                    className="w-4/5 mx-2"
                />
                <output
                    htmlFor="b"
                    className="px-2 py-1 rounded bg-blue-500 text-black inline-block min-w-[2.5em]"
                >
                    {rgb.b}
                </output>
            </fieldset>

            {/* Hex Output */}
            <output className="text-3xl px-4 py-2 rounded bg-white/30 inline-block min-w-[4.5em]">
                {hex}
            </output>
        </div>
    );
}
