$('video').mediaelementplayer({
  features: ['playpause',
    'current',
    'progress',
    'duration',
    'skipback',
    'speed',
    'tracks',
    'quality',
    'volume',
    'preview',
    'fullscreen'
  ],
  controlsTimesDefault: 10000,
  controlsTimeoutMouseLeave: 10000,
  defaultSpeed: 1.00,
  skipBackInterval: 10,
  jumpForwardInterval: 10,
  speeds: ['2.0', '1.75', '1.50', '1.25', '1.0', '0.75'],
  speedChar: "x",
  startLanguage: 'en'
});