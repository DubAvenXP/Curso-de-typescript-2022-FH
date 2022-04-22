(() => {
    enum Color {
        Red,
        Green,
        Blue,
    }

    let c: Color = Color.Green;
    console.log(c);

    enum AudioLevel {
        Low = 1,
        Medium,
        High = 10,
    }

    let currentAudioLevel: AudioLevel = AudioLevel.Medium;
    let currentAudio: AudioLevel = 10;

    console.log(currentAudioLevel);
    console.log(currentAudioLevel);
})();
