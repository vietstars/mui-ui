import { createContext, useContext } from "react";
import useLocalStorage from "hooks/useLocalStorage";
import { defaultSettings } from "config"

const initialState = {
  ...defaultSettings,

  // Mode
  onToggleMode: () => {},

}

const SettingContext = createContext(initialState);

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useLocalStorage("settings", {
    themeMode: initialState.themeMode,
    lang: initialState.lang
  });

  // Mode
  const onToggleMode = () => {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === "light" ? "dark" : "light",
    });
  };

  return (
    <SettingContext.Provider
      value={{
        ...settings,
        onToggleMode // Mode
      }}
      >
      {children}
    </SettingContext.Provider>
  )
}

export const useSetting = () => useContext(SettingContext);
