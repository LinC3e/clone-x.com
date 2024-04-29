import { useCallback, useState } from "react";
import Input from "../Input";
import Model from "../Model";

import useRegisterModal from "@/hooks/useModalRegister";
import useLoginModel from "@/hooks/useModelLogin";

const LoginModal = () => {
    const LoginModal = useLoginModel();
    const registerModal = useRegisterModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        if (isLoading) {
            return
        }
        LoginModal.onClose();
        registerModal.onOpen();
    },[isLoading, registerModal, LoginModal]);

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);
            // TODO: ADD LOG IN

            LoginModal.onClose();
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    }, [LoginModal]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={isLoading}
            />

            <Input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            disabled={isLoading}
            />
        </div>
    )

    const footerContent = (
        <div className="text-neutral-400 text-center mt-4">
            <p>First time in X.com? 
                <span 
                onClick={onToggle}
                className="
                text-white
                cursor-pointer
                hover:underline
                "
                > Create an account.</span>
            </p>
        </div>
    );

    return (
        <div>
            <Model 
            disabled={isLoading}
            isOpen={LoginModal.isOpen}
            title="Login"
            actionLabel="Sign in"
            onClose={LoginModal.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
            footer={footerContent}
            />
        </div>
    );
}

export default LoginModal;