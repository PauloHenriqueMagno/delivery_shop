import { Button, TextField } from "@material-ui/core";
import { Form, LogInSection } from "../../components/styled"
import EatingTogether from "../../images/Eating_Together";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { profileContext } from "../../providers/profile"
import { toast } from "react-toastify"
import { useHistory } from "react-router";

const LogIn = () => {
    const { loginProfile } = useContext(profileContext)

    const history = useHistory()

    const schema = yup.object().shape({
        user: yup.string().required("Insira seu nome de usuário ou e-mail"),
        password: yup.string().required("Insira sua senha")
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({resolver: yupResolver(schema)})

    const submitForm = ({user,password}) =>{
        const users = JSON.parse(localStorage.getItem("@Delivery:users"))

        if(!!users){
            const getUser = users.filter(
                profile => ((profile.nickname===user || profile.email===user) && profile.password===password)
            )[0];

            if(!!getUser){              
                const {nickname, email, userName, orders} = getUser;
                
                loginProfile({nickname, email, userName, orders})
                history.push("/");
                toast.success("Conta acessada", {position: "top-center"})
            }
            else{
                toast.error("E-mail, nome de usuário ou(e) senha incorreto(s)", {position: "top-center"})
            }

        }
        else{
            toast.error("E-mail, nome de usuário ou(e) senha incorreto(s)", {position: "top-center"})
        }
    }

    return (
        <LogInSection direction="left">
            <EatingTogether />
            <Form onSubmit={handleSubmit(submitForm)} direction="right">
                <h1>Entrar</h1>
                <TextField
                    label="E-mail ou nome de usuário:"
                    variant="outlined"
                    fullWidth={true}
                    {...register("user")}
                    helperText={errors.user?.message}
                />
                <TextField
                    type="password"
                    label="Senha:"
                    variant="outlined"
                    fullWidth={true}
                    {...register("password")}
                    helperText={errors.password?.message}
                />
                <Button
                    type="submit"
                    variant="contained"
                >
                    Entrar
                </Button>
                <p>Não possui uma conta? <span onClick={()=> history.push("/signup")}>Cadastrar-se</span></p>
            </Form>
        </LogInSection>
    )
}

export default LogIn;