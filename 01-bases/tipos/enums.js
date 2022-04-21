"use strict";
(() => {
    let Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    let c = Color.Green;
    console.log(c);
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["Low"] = 1] = "Low";
        AudioLevel[AudioLevel["Medium"] = 2] = "Medium";
        AudioLevel[AudioLevel["High"] = 10] = "High";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudioLevel = AudioLevel.Medium;
    let currentAudio = 10;
    console.log(currentAudioLevel);
    console.log(currentAudioLevel);
})();
