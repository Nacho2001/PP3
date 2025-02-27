import WebView from "react-native-webview";

const MyWebView = () => {
    return (
        <WebView 
            source={{ uri: 'https://google.com.ar' }}
            style={{ flex: 1 }}
        />
    )
}

export default MyWebView;