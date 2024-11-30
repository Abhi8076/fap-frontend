import { useNavigate } from "react-router-dom";
import { handleCatch, screenHeight } from "../../common-utils";
import { ColFlex, StyledInput } from "../../Styled/Layout";
import { Button, Checkbox, Form } from "antd";
import { Lock, User } from "@phosphor-icons/react";
import HeaderComponent from "../../Components/Header";
import { loginUser } from "../../api/auth";

const Login = () => {
    const onFinish = async (values) => {
        try {
            const res = await loginUser({
                username: values.username,
                password: values.password
            });
            if (res.status === 200) {
                window.localStorage.setItem("userId", res.data.userId);
                window.location.reload();
            }
        } catch (e) {
            handleCatch(e);
        }
    };

    return (
        <ColFlex ai="center" minH={false ? `${screenHeight}` : "100vh"} maxW="500px" w="100%" bgc="#fff" style={{ position: "relative" }}>
            <HeaderComponent />
            <Form
                name="login"
                initialValues={{
                    remember: true,
                }}
                style={{
                    maxWidth: 360,
                    marginTop: '40%'
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <StyledInput prefix={<User size={22} color="#000" />} placeholder="Username" />
                    {/* <Input prefix={<User size={22} color="#000" />} placeholder="Username" /> */}
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <StyledInput prefix={<Lock size={22} color="#000" />} type="password" placeholder="Password" />
                    {/* <Input prefix={<Lock size={22} color="#000" />} type="password" placeholder="Password" /> */}
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                </Form.Item>

                <Form.Item>
                    <Button block type="primary" htmlType="submit" style={{marginBottom: "10px"}}>
                        Log in
                    </Button>
                    or contact Abhishek for registration
                </Form.Item>
            </Form>
        </ColFlex>
    );
};

export default Login;