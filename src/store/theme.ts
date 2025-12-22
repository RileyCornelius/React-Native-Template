import { atomWithMMKV } from "@/service/storage";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { UnistylesRuntime } from 'react-native-unistyles'

const THEME_KEY = 'theme';
export const themeAtom = atomWithMMKV<'light' | 'dark' | 'system'>(THEME_KEY, 'system');

export function useTheme() {
    const [storedTheme, setStoredTheme] = useAtom<'light' | 'dark' | 'system'>(themeAtom);

    useEffect(() => {
        setTheme(storedTheme);
    }, []);

    function setTheme(theme: 'light' | 'dark' | 'system') {
        setStoredTheme(theme);
        if (theme === 'system') {
            UnistylesRuntime.setAdaptiveThemes(true);
        }
        else {
            UnistylesRuntime.setAdaptiveThemes(false);
            UnistylesRuntime.setTheme(theme);
        }
    }

    function getTheme(): "light" | "dark" {
        const colorScheme = UnistylesRuntime.themeName as "light" | "dark";
        return colorScheme;
    }

    return { storedTheme, setTheme, getTheme };
}