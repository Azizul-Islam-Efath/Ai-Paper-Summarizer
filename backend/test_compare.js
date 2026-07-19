import { comparePapers } from './src/services/AI/ComparisonEngine.js';

const dummyPapers = [
  {
    title: "Improving Musical Instrument Classification with Advanced Machine Learning Techniques A Comparative Study",
    year: 2024,
    authors: ["J. Chulev"],
    abstractSummary: "This study compares Naive Bayes, SVM, Random Forests, Boosting (AdaBoost, XGBoost), and deep learning (CNNs, ANNs) models for musical instrument classification using the NSynth dataset.",
    methodology: "Features (MFCCs, Chroma, Spectral Contrast) are extracted from WAV audio notes and fed to classical ML and deep learning models.",
    dataset: "NSynth dataset with 305,979 notes split into Train, Valid, and Test with no instrument overlap.",
    algorithms: "Naive Bayes, Support Vector Machines, Random Forests, AdaBoost, XGBoost, CNNs, ANNs.",
    results: "A comparative evaluation benchmark of classical models versus deep learning models.",
    limitations: "Focuses on monophonic notes; does not evaluate polyphonic audio mixing."
  },
  {
    title: "Deep Learning for Audio Event Detection in Real-world Environments",
    year: 2023,
    authors: ["A. Smith", "B. Jones"],
    abstractSummary: "Proposes an end-to-end Convolutional Recurrent Neural Network (CRNN) to detect environmental sound events like glass breaks and footsteps in noisy settings.",
    methodology: "CRNN model trained on log-mel spectrogram features with data augmentation techniques.",
    dataset: "Audioset subset with 20,000 real-world environmental recording clips.",
    algorithms: "CRNN, log-mel spectrogram extraction, spatial augmentation.",
    results: "Achieved 82% F1 score in high-noise signal-to-noise ratio environments.",
    limitations: "Requires significant computational power for real-time edge deployment."
  }
];

comparePapers(dummyPapers)
  .then(res => console.log('Comparison successful! Output preview:', JSON.stringify(res, null, 2).substring(0, 1000)))
  .catch(err => console.error('Comparison error:', err));
