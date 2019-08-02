type FaustEditorCompileOptions = {
    mainFileIndex?: number;
    useWorklet: boolean;
    bufferSize: 128 | 256 | 512 | 1024 | 2048 | 4096;
    saveCode: boolean;
    saveParams: boolean;
    saveDsp: boolean;
    realtimeCompile: boolean;
    popup: boolean;
    voices: number;
    plotMode: "offline" | "continuous" | "onevent" | "manual";
    plot: number;
    plotSR: number;
    plotFFT: 256 | 1024 | 4096;
    plotFFTOverlap: 1 | 2 | 4 | 8;
    drawSpectrogram: boolean;
    args: { [key: string]: any };
};
