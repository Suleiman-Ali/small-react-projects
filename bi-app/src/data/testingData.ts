const TESTING_DATA: number[][] = [
  [3, 1, 42, 0, 0, 7.8958],
  [1, 1, 37, 0, 0, 42.4],
  [3, 1, 44, 0, 0, 8.05],
  [1, 1, 35, 0, 0, 26.55],
  [3, 1, 36, 1, 0, 15.55],
  [3, 1, 30, 0, 0, 7.8958],
  [1, 1, 27, 0, 0, 30.5],
  [2, 0, 22, 1, 2, 41.5792],
  [1, 0, 40, 0, 0, 153.4625],
  [3, 0, 39, 1, 5, 31.275],
  [3, 1, 21, 0, 0, 7.05],
  [3, 0, 18, 1, 0, 15.5],
  [3, 1, 22, 0, 0, 7.75],
  [3, 1, 35, 0, 0, 8.05],
  [2, 0, 24, 1, 2, 65],
  [3, 1, 34, 1, 1, 14.4],
  [3, 0, 26, 1, 0, 16.1],
  [2, 0, 4, 2, 1, 39],
  [2, 1, 26, 0, 0, 10.5],
  [3, 1, 27, 1, 0, 14.4542],
  [1, 1, 42, 1, 0, 52.5542],
  [3, 1, 20, 1, 1, 15.7417],
  [3, 1, 21, 0, 0, 7.8542],
  [3, 1, 21, 0, 0, 16.1],
  [1, 1, 61, 0, 0, 32.3208],
  [2, 1, 57, 0, 0, 12.35],
  [1, 0, 21, 0, 0, 77.9583],
  [3, 1, 26, 0, 0, 7.8958],
  [3, 1, 18, 0, 0, 7.7333],
  [1, 1, 80, 0, 0, 30],
  [3, 1, 51, 0, 0, 7.0542],
  [1, 1, 32, 0, 0, 30.5],
  [1, 1, 30, 0, 0, 0],
  [3, 0, 9, 3, 2, 27.9],
  [2, 0, 28, 0, 0, 13],
  [3, 1, 32, 0, 0, 7.925],
  [2, 1, 31, 1, 1, 26.25],
  [3, 0, 41, 0, 5, 39.6875],
  [3, 1, 37, 1, 0, 16.1],
  [3, 1, 20, 0, 0, 7.8542],
  [1, 0, 24, 0, 0, 69.3],
  [3, 0, 2, 3, 2, 27.9],
  [3, 1, 32, 0, 0, 56.4958],
  [3, 0, 0.75, 2, 1, 19.2583],
  [1, 1, 48, 1, 0, 76.7292],
  [3, 1, 19, 0, 0, 7.8958],
  [1, 1, 56, 0, 0, 35.5],
  [3, 1, 21, 0, 0, 7.55],
  [3, 0, 23, 0, 0, 7.55],
  [3, 1, 23, 0, 0, 7.8958],
  [2, 0, 18, 0, 1, 23],
  [3, 1, 21, 0, 0, 8.4333],
  [3, 0, 16, 0, 0, 7.8292],
  [3, 0, 18, 0, 0, 6.75],
  [2, 1, 24, 2, 0, 73.5],
  [3, 1, 27, 0, 0, 7.8958],
  [3, 0, 32, 1, 1, 15.5],
  [2, 1, 23, 0, 0, 13],
  [1, 1, 58, 0, 2, 113.275],
  [1, 1, 50, 2, 0, 133.65],
  [3, 1, 40, 0, 0, 7.225],
  [1, 1, 47, 0, 0, 25.5875],
  [3, 1, 36, 0, 0, 7.4958],
  [3, 1, 20, 1, 0, 7.925],
  [2, 1, 32, 2, 0, 73.5],
  [2, 1, 25, 0, 0, 13],
  [3, 1, 49, 0, 0, 7.775],
  [3, 1, 43, 0, 0, 8.05],
  [1, 0, 48, 1, 0, 52],
  [2, 0, 40, 1, 1, 39],
  [1, 1, 31, 1, 0, 52],
  [2, 1, 70, 0, 0, 10.5],
  [2, 1, 31, 0, 0, 13],
  [2, 1, 19, 0, 0, 0],
  [3, 1, 18, 0, 0, 7.775],
  [3, 1, 24.5, 0, 0, 8.05],
  [3, 0, 18, 0, 0, 9.8417],
  [3, 0, 43, 1, 6, 46.9],
  [1, 1, 36, 0, 1, 512.3292],
  [3, 0, 28, 0, 0, 8.1375],
  [1, 1, 27, 0, 0, 76.7292],
  [3, 1, 20, 0, 0, 9.225],
  [3, 1, 14, 5, 2, 46.9],
  [2, 1, 60, 1, 1, 39],
  [2, 1, 25, 1, 2, 41.5792],
  [3, 1, 14, 4, 1, 39.6875],
  [3, 1, 19, 0, 0, 10.1708],
  [3, 1, 18, 0, 0, 7.7958],
  [1, 0, 15, 0, 1, 211.3375],
  [1, 1, 31, 1, 0, 57],
  [3, 0, 4, 0, 1, 13.4167],
  [3, 1, 37, 0, 0, 56.4958],
  [3, 1, 25, 0, 0, 7.225],
  [1, 1, 60, 0, 0, 26.55],
  [2, 1, 52, 0, 0, 13.5],
  [3, 1, 44, 0, 0, 8.05],
  [3, 0, 19, 0, 0, 7.7333],
  [1, 1, 49, 1, 1, 110.8833],
  [3, 1, 42, 0, 0, 7.65],
  [1, 0, 18, 1, 0, 227.525],
  [1, 1, 35, 0, 0, 26.2875],
  [3, 0, 18, 0, 1, 14.4542],
  [3, 1, 25, 0, 0, 7.7417],
  [3, 1, 26, 1, 0, 7.8542],
  [2, 1, 39, 0, 0, 26],
  [2, 0, 45, 0, 0, 13.5],
  [1, 1, 42, 0, 0, 26.2875],
  [1, 0, 22, 0, 0, 151.55],
  [3, 1, 4, 1, 1, 15.2458],
  [1, 0, 24, 0, 0, 49.5042],
  [1, 1, 41, 0, 0, 26.55],
  [1, 1, 48, 1, 0, 52],
  [3, 1, 29, 0, 0, 9.4833],
  [2, 1, 52, 0, 0, 13],
  [3, 1, 19, 0, 0, 7.65],
  [1, 0, 38, 0, 0, 227.525],
  [2, 0, 27, 0, 0, 10.5],
  [3, 1, 33, 0, 0, 7.775],
  [2, 0, 6, 0, 1, 33],
  [3, 1, 17, 1, 0, 7.0542],
  [2, 1, 34, 0, 0, 13],
  [2, 1, 50, 0, 0, 13],
  [1, 1, 27, 1, 0, 53.1],
  [3, 1, 20, 0, 0, 8.6625],
  [2, 0, 30, 3, 0, 21],
  [3, 0, 28, 0, 0, 7.7375],
  [2, 1, 25, 1, 0, 26],
  [3, 0, 25, 1, 0, 7.925],
  [1, 0, 29, 0, 0, 211.3375],
  [3, 1, 11, 0, 0, 18.7875],
  [2, 1, 41, 0, 0, 0],
  [2, 1, 23, 0, 0, 13],
  [2, 1, 23, 0, 0, 13],
  [3, 1, 28.5, 0, 0, 16.1],
  [3, 0, 48, 1, 3, 34.375],
  [1, 1, 35, 0, 0, 512.3292],
  [3, 1, 20, 0, 0, 7.8958],
  [3, 1, 32, 0, 0, 7.8958],
  [1, 1, 45, 0, 0, 30],
  [1, 1, 36, 1, 0, 78.85],
  [1, 0, 21, 2, 2, 262.375],
  [3, 1, 24, 1, 0, 16.1],
  [3, 1, 31, 0, 0, 7.925],
  [1, 1, 70, 1, 1, 71],
  [3, 1, 16, 1, 1, 20.25],
  [2, 0, 30, 0, 0, 13],
  [1, 1, 19, 1, 0, 53.1],
  [3, 1, 31, 0, 0, 7.75],
  [2, 0, 4, 1, 1, 23],
  [3, 1, 6, 0, 1, 12.475],
  [3, 1, 33, 0, 0, 9.5],
  [3, 1, 23, 0, 0, 7.8958],
  [2, 0, 48, 1, 2, 65],
  [2, 1, 0.67, 1, 1, 14.5],
  [3, 1, 28, 0, 0, 7.7958],
  [2, 1, 18, 0, 0, 11.5],
  [3, 1, 34, 0, 0, 8.05],
  [1, 0, 33, 0, 0, 86.5],
  [3, 1, 23, 0, 0, 14.5],
  [3, 1, 41, 0, 0, 7.125],
  [3, 1, 20, 0, 0, 7.2292],
  [1, 0, 36, 1, 2, 120],
  [3, 1, 16, 0, 0, 7.775],
  [1, 0, 51, 1, 0, 77.9583],
  [1, 1, 46, 0, 0, 39.6],
  [3, 0, 30.5, 0, 0, 7.75],
  [3, 1, 28, 1, 0, 24.15],
  [3, 1, 32, 0, 0, 8.3625],
  [3, 1, 24, 0, 0, 9.5],
  [3, 1, 48, 0, 0, 7.8542],
  [2, 0, 57, 0, 0, 10.5],
  [3, 1, 29, 0, 0, 7.225],
  [2, 0, 54, 1, 3, 23],
  [3, 1, 18, 0, 0, 7.75],
  [3, 1, 20, 0, 0, 7.75],
  [3, 0, 5, 0, 0, 12.475],
  [3, 1, 22, 0, 0, 7.7375],
  [1, 0, 43, 0, 1, 211.3375],
  [3, 0, 13, 0, 0, 7.2292],
  [1, 0, 17, 1, 0, 57],
  [1, 1, 29, 0, 0, 30],
  [3, 1, 35, 1, 2, 23.45],
  [3, 1, 25, 0, 0, 7.05],
  [3, 1, 25, 0, 0, 7.25],
  [3, 0, 18, 0, 0, 7.4958],
  [3, 1, 8, 4, 1, 29.125],
  [3, 1, 1, 1, 2, 20.575],
  [1, 1, 46, 0, 0, 79.2],
  [3, 1, 20, 0, 0, 7.75],
  [2, 1, 16, 0, 0, 26],
  [3, 0, 21, 8, 2, 69.55],
  [1, 1, 43, 0, 0, 30.6958],
  [3, 1, 25, 0, 0, 7.8958],
  [2, 1, 39, 0, 0, 13],
  [1, 0, 49, 0, 0, 25.9292],
  [3, 0, 31, 0, 0, 8.6833],
  [3, 1, 30, 0, 0, 7.2292],
  [3, 0, 30, 1, 1, 24.15],
  [2, 1, 34, 0, 0, 13],
  [2, 0, 31, 1, 1, 26.25],
  [1, 1, 11, 1, 2, 120],
  [3, 1, 0.42, 0, 1, 8.5167],
  [3, 1, 27, 0, 0, 6.975],
  [3, 1, 31, 0, 0, 7.775],
  [1, 1, 39, 0, 0, 0],
  [3, 0, 18, 0, 0, 7.775],
  [2, 1, 39, 0, 0, 13],
  [1, 0, 33, 1, 0, 53.1],
  [3, 1, 26, 0, 0, 7.8875],
  [3, 1, 39, 0, 0, 24.15],
  [2, 1, 35, 0, 0, 10.5],
  [3, 0, 6, 4, 2, 31.275],
  [3, 1, 30.5, 0, 0, 8.05],
  [1, 1, 39, 0, 0, 0],
  [3, 0, 23, 0, 0, 7.925],
  [2, 1, 31, 1, 1, 37.0042],
  [3, 1, 43, 0, 0, 6.45],
  [3, 1, 10, 3, 2, 27.9],
  [1, 0, 52, 1, 1, 93.5],
  [3, 1, 27, 0, 0, 8.6625],
  [1, 1, 38, 0, 0, 0],
  [3, 0, 27, 0, 1, 12.475],
  [3, 1, 2, 4, 1, 39.6875],
  [3, 1, 36, 0, 0, 6.95],
  [3, 1, 23, 0, 0, 56.4958],
  [2, 1, 1, 0, 2, 37.0042],
  [3, 1, 19, 0, 0, 7.75],
  [1, 0, 62, 0, 0, 80],
  [3, 0, 15, 1, 0, 14.4542],
  [2, 1, 0.83, 1, 1, 18.75],
  [3, 1, 30, 0, 0, 7.2292],
  [3, 1, 23, 0, 0, 7.8542],
  [3, 1, 18, 0, 0, 8.3],
  [1, 0, 39, 1, 1, 83.1583],
  [3, 1, 21, 0, 0, 8.6625],
  [3, 1, 20, 0, 0, 8.05],
  [3, 1, 32, 0, 0, 56.4958],
  [1, 1, 29, 0, 0, 29.7],
  [3, 1, 20, 0, 0, 7.925],
  [2, 1, 16, 0, 0, 10.5],
  [1, 0, 30, 0, 0, 31],
  [3, 1, 34.5, 0, 0, 6.4375],
  [3, 1, 17, 0, 0, 8.6625],
  [3, 1, 42, 0, 0, 7.55],
  [3, 1, 18, 8, 2, 69.55],
  [3, 1, 35, 0, 0, 7.8958],
  [2, 1, 28, 0, 1, 33],
  [1, 0, 40, 1, 0, 89.1042],
  [3, 1, 4, 4, 2, 31.275],
  [3, 1, 74, 0, 0, 7.775],
  [3, 0, 9, 1, 1, 15.2458],
  [1, 0, 16, 0, 1, 39.4],
  [2, 0, 44, 1, 0, 26],
  [3, 0, 18, 0, 1, 9.35],
  [1, 0, 45, 1, 1, 164.8667],
  [1, 1, 51, 0, 0, 26.55],
  [3, 0, 24, 0, 3, 19.2583],
  [3, 1, 30, 0, 0, 7.2292],
  [3, 1, 41, 2, 0, 14.1083],
  [2, 1, 21, 1, 0, 11.5],
  [1, 0, 48, 0, 0, 25.9292],
  [3, 0, 14, 8, 2, 69.55],
  [2, 1, 24, 0, 0, 13],
  [2, 0, 42, 0, 0, 13],
  [2, 0, 27, 1, 0, 13.8583],
  [1, 1, 31, 0, 0, 50.4958],
  [3, 1, 23, 0, 0, 9.5],
  [3, 1, 4, 1, 1, 11.1333],
  [3, 1, 26, 0, 0, 7.8958],
  [1, 0, 47, 1, 1, 52.5542],
  [1, 1, 33, 0, 0, 5],
  [3, 1, 47, 0, 0, 9],
  [2, 0, 28, 1, 0, 24],
  [3, 0, 15, 0, 0, 7.225],
  [3, 1, 20, 0, 0, 9.8458],
  [3, 1, 19, 0, 0, 7.8958],
  [3, 1, 23, 0, 0, 7.8958],
  [1, 0, 56, 0, 1, 83.1583],
  [2, 0, 25, 0, 1, 26],
  [3, 1, 33, 0, 0, 7.8958],
  [3, 0, 22, 0, 0, 10.5167],
  [2, 1, 28, 0, 0, 10.5],
  [3, 1, 25, 0, 0, 7.05],
  [3, 0, 39, 0, 5, 29.125],
  [2, 1, 27, 0, 0, 13],
  [1, 0, 19, 0, 0, 30],
  [3, 0, 7, 1, 2, 23.45],
  [1, 1, 26, 0, 0, 30],
  [3, 1, 32, 0, 0, 7.75],
];

export default TESTING_DATA;
