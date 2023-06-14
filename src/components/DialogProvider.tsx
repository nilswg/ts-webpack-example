import React from 'react';

type Props_DialogProvider = {
    children: React.ReactNode;
};

type Context_Dialog = {
    isOpen: boolean;
    message: string;
    dialogAPI: {
        open: (message?: string) => void;
        close: () => void;
        toggle: () => void;
    };
};

export const DialogContext = React.createContext<Context_Dialog>({} as any);

export const DialogProvider: React.FC<Props_DialogProvider> = ({ children }) => {
    // 定義狀態
    const [isOpen, setIsOpen] = React.useState(false);
    const [message, setMessage] = React.useState('');

    return (
        <DialogContext.Provider
            value={React.useMemo(
                () => ({
                    isOpen,
                    message,
                    dialogAPI: {
                        /**
                         * 開啟 Dialog 視窗
                         * @param message 要顯示 Dialog 中的文字內容
                         */
                        open: (message?: string) => {
                            setIsOpen(true);
                            if (message !== undefined) {
                                setMessage(message);
                            }
                        },
                        /**
                         * 關閉 Dialog 視窗
                         * @returns
                         */
                        close: () => setIsOpen(false),
                        /**
                         * 切換 Dialog 視窗
                         * @returns
                         */
                        toggle: () => setIsOpen((s) => !s),
                    },
                }),
                [isOpen, message],
            )}>
            {children}
        </DialogContext.Provider>
    );
};

type Props_Enhance = Context_Dialog;

/**
 * 強化元件，賦予使用 Dialog 的功能
 * @param Component
 * @returns
 */
export const withDialog =
    <T,>(Component: React.ComponentType<T & Props_Enhance>): React.FC<T> =>
    (props) => {
        const enhanceProps = React.useContext(DialogContext);
        return <Component {...props} {...enhanceProps} />;
    };
