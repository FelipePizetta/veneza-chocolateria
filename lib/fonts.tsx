import { PT_Sans, Yanone_Kaffeesatz, Open_Sans, Lato } from "next/font/google";

export const ptSans = PT_Sans({ 
    display: "swap", 
    subsets: ["latin"], 
    weight: ["400"], 
    variable: "--font-pt-sans" 
});

export const lato = Lato({ 
    display: "swap", 
    subsets: ["latin"], 
    weight: ["400", "700"], 
    variable: "--font-lato" 
});

export const yanoneKaffeesatz = Yanone_Kaffeesatz({ 
    display: "swap", 
    subsets: ["latin"], 
    variable: "--font-yanone-kaffeesatz" 
});

export const openSans = Open_Sans({ 
    display: "swap", 
    subsets: ["latin"], 
    variable: "--font-open-sans" 
});
