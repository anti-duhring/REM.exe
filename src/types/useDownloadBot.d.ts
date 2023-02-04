import { Bot } from "./bot";

type TUseDownloadBot = () => {
    download: (Bot) => void;
    isLoading: boolean;
    hasError: boolean;
};

interface IBot extends Bot {
    content: String;
}