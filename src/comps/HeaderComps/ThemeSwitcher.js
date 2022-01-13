// import React from "react";
// import { useThemeSwitcher } from "react-css-theme-switcher";
// import { ThemeSwitcherProvider } from "react-css-theme-switcher";

// const themes = {
//   light: "public/light.css",
//   dark: "public/dark.css",
// };

// const Component = () => {
//   const { switcher, themes, currentTheme, status } = useThemeSwitcher();
//   const [isDarkMode, setIsDarkMode] = React.useState(false);
 

//   const toggleDarkMode = () => {
//     setIsDarkMode((previous) => {
//       switcher({ theme: previous ? themes.light : themes.dark });
//       return !previous;
//     });
//   };

//   // if (status === "loading") {
//   //   return <div>Loading styles...</div>;
//   // }
//   // else 
//   return (
//     <div>
//       <h2>{currentTheme}</h2>
//       <button onClick={toggleDarkMode} />
//     </div>
//   );
// };

// export const ThemeSwitcher = () => {
//   return (
//     <>
//       <ThemeSwitcherProvider
//         defaultTheme="light"
//         insertionPoint={"inject-styles-here"}
//         themeMap={themes}
//       >
//         <Component />
//       </ThemeSwitcherProvider>
//     </>
//   );
// };


export const ThemeSwitcher = () =>{
  return (
    <>
      Theme
    </>
  );
}