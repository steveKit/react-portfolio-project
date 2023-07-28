
const useRedirect = (url) => {
    if (typeof url !== "string") {
        return window.alert("Unable to redirect, URL is not a string");
    }
    return () => {
        window.open(url);
    };
};

export default useRedirect;