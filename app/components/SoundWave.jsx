"use client";

import WavesurferPlayer from "@wavesurfer/react";
import { useEffect, useState, forwardRef, useImperativeHandle } from "react";

const formatTime = (seconds) => [seconds / 60, seconds % 60].map((v) => `0${Math.floor(v)}`.slice(-2)).join(":");

const SoundWave = forwardRef(({ url, onFinish }, ref) => {
    const [wavesurfer, setWavesurfer] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        if (wavesurfer) {
            setDuration(wavesurfer.getDuration());
        }
    }, [wavesurfer]);

    const onReady = (ws) => {
        setWavesurfer(ws);
    };

    useImperativeHandle(ref, () => ({
        playPause: () => wavesurfer?.playPause(),
        play: () => wavesurfer?.play(),
        stop: () => wavesurfer?.stop(),
        isPlaying: () => wavesurfer?.isPlaying(),
        on: (event, listen) => wavesurfer?.on(event, listen)
    }));
    

    return (
        <div className="w-full grid grid-cols-10 space-x-3">
            <div className="col-span-8">
                <WavesurferPlayer
                    height={40}
                    waveColor="#606060"
                    progressColor="#71B190"
                    cursorColor="transparent"
                    barGap={1}
                    barWidth={2}
                    barRadius={1}
                    url={url}
                    onReady={onReady}
                    onFinish={onFinish}
                />
            </div>

            <div className="flex items-center col-span-1">
                <p className="text-[#999999] text-[0.6rem] bg-zinc-900 px-2 py-1 rounded-lg">{formatTime(duration)}</p>
            </div>
        </div>
    );
});

SoundWave.displayName = "SoundWave";

export default SoundWave;
