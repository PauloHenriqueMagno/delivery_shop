import { Form, SignUpSection } from "../../components/styled"
import { Button, TextField } from "@material-ui/core";
import Signup from "../../images/Sign_Up";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { profileContext } from "../../providers/profile"
import { toast } from "react-toastify"
import { useHistory } from "react-router";

const SignUp = () => {
    const { verifyProfile, saveProfile } = useContext(profileContext)
    const history = useHistory()

    const schema = yup.object().shape({
        nickname: yup.string().required("Insira um nome de usuário"),
        password: yup.string().required("Insira uma senha").min(8, "Senha deve ter pelo menos 8 caracteres"),
        passwordConfirm: yup.string().required("Confirme sua senha").oneOf([yup.ref("password")], "Senhas são diferentes"),
        email: yup.string().required("Insira seu e-mail").email("Insira um e-mail valido"),
        emailConfirm: yup.string().required("Confirme seu e-mail").oneOf([yup.ref("email")], "E-mails são diferentes"),
        userName: yup.string().required("Insira seu nome")
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({resolver: yupResolver(schema)})

    const submitForm = (data) => {
        const isSome = verifyProfile(data)
        console.log(isSome);

        if(isSome.nickname){
            return toast.error("Nome de usuário já utilizado")
        }
        if(isSome.email){
            return toast.error("E-mail já utilizado")
        }

        const { nickname, password, email , userName } = data

        saveProfile({ nickname, password, email, userName })

        history.push("/login");
        toast.success("Conta cadastrada com sucesso", {position: "top-center"});
    }

    return (
        <SignUpSection direction="right">
            <Form onSubmit={handleSubmit(submitForm)} direction="left">
                <h1>Cadastrar</h1>
                <TextField
                    type="text"
                    label="Nome de usuário:"
                    variant="outlined"
                    fullWidth={true}
                    {...register("nickname")}
                    helperText={errors.nickname?.message}
                />
                <TextField
                    type="text"
                    label="Nome:"
                    variant="outlined"
                    fullWidth={true}
                    {...register("userName")}
                    helperText={errors.userName?.message}
                />
                <TextField
                    type="email"
                    label="E-mail:"
                    variant="outlined"
                    fullWidth={true}
                    {...register("email")}
                    helperText={errors.email?.message}
                />
                <TextField
                    type="email"
                    label="Confirmar o e-mail:"
                    variant="outlined"
                    fullWidth={true}
                    {...register("emailConfirm")}
                    helperText={errors.emailConfirm?.message}
                />
                <TextField
                    type="password"
                    label="Senha:"
                    variant="outlined"
                    fullWidth={true}
                    {...register("password")}
                    helperText={errors.password?.message}
                />
                <TextField
                    type="password"
                    label="Confirmar a senha:"
                    variant="outlined"
                    fullWidth={true}
                    {...register("passwordConfirm")}
                    helperText={errors.passwordConfirm?.message}
                />
                <Button
                    type="submit"
                    variant="contained"
                >
                    Cadastrar
                </Button>
                <p>Já possui uma conta? <span onClick={()=> history.push("/login")}>Entrar</span></p>
            </Form>
            <Signup />
        </SignUpSection>
    )
}

export default SignUp;