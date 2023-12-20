export interface RGBGame {
    id: number;
    totalRed: number;
    totalGreen: number;
    totalBlue: number;
    sets?: Set[];
}

export interface Set {
    red?: number;
    green?: number;
    blue?: number;
}


