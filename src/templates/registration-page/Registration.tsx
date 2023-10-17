import { useState, useContext, useCallback } from "react";
import { styled } from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// import Particles from "react-tsparticles";
// import type { Container, Engine } from "tsparticles-engine";
// import { loadFull } from "tsparticles";

const HeroBackground = styled.div`
  width: 100vw;
  height: 100%;
  background-color: ${(props) =>
    props.theme.tertiaryColor !== undefined ? props.theme.tertiaryColor : "rgb(33, 154, 241)"};
`;

// const ParticlesHero = styled(Particles)`
//   width: 100vw;
//   height: calc(100vh - 2.75rem);
//   margin-top: -0.5rem;
// `;

const HeroDiv = styled.div`
  width: 100vw;
  /* height: 49rem; */
  display: flex;
  flex-direction: column;
`;

const LoginContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  background-color: ${(props) => (props.theme.tertiaryColor !== undefined ? props.theme.tertiaryColor : "#fbfffe")};
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  margin-top: 2.75rem;
`;

const LoginFormDiv = styled.div`
  width: 30vw;
  height: 85%;
  display: flex;
  flex-direction: column;

  border-radius: 12.5px;
  padding: 2rem 2rem 3rem;
  background-color: ${(props) => (props.theme.backgroundColor !== undefined ? props.theme.backgroundColor : "#fbfffe")};
  color: #635c7b;
  box-shadow: 0px 0px 10px 3px #2b3b5e;

  justify-content: center;
  align-items: center;
  pointer-events: auto;
`;

interface theme {
  backgroundColor: string;
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
}

interface props {
  loggedIn: boolean;
  theme?: theme;
}

export default function Registration({ loggedIn, theme }: props) {
  const [email, setEmail] = useState<String | null>(null);
  const [password, setPassword] = useState<String | null>(null);
  const [passwordConfirmation, setPasswordConfirmation] = useState<String | null>(null);

  const [name, setName] = useState<string | null>(null);

  const [passwordValidity, setPasswordValidity] = useState<boolean | undefined>(false);

  //   const particlesInit = useCallback(async (engine) => {
  //     await loadFull(engine);
  //   }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    // function for submitting form to login API
    e.preventDefault();

    if (password !== passwordConfirmation) {
      setPasswordValidity(false);
      return;
    } else {
      setPasswordValidity(true);
    }

    //   need to fill in user object returned type
    interface responseObject {
      ok: boolean;
      [key: string]: any;
    }

    const response: Promise<responseObject> | void | undefined = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        if (res !== undefined && res.ok) {
          // set login status, session data, user settings
          //   setLoginStatus(true);
          //   setUserSettings(user.userSession);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <HeroDiv>
      {/* React TS Particles, used for background design styling */}
      {/* <ParticlesHero
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 4 },
            },
          },
        }}
      /> */}
      <HeroDiv />
      <LoginContainer theme={theme}>
        <LoginFormDiv theme={theme}>
          <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <Form.Label className={"mb-1"} style={{ width: "100%" }}>
              <h4 className={"mb-0"} style={{ width: "100%", textAlign: "center" }}>
                <strong style={{ color: theme?.tertiaryColor }}>REGISTRATION</strong>
              </h4>
            </Form.Label>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <strong style={{ color: theme?.tertiaryColor }}>Email address</strong>
              </Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                <strong style={{ color: theme?.tertiaryColor }}>Password</strong>
              </Form.Label>
              <Form.Control
                required
                isValid={passwordValidity}
                className="mb-3"
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Form.Label>
                <strong style={{ color: theme?.tertiaryColor }}>Confirm Password</strong>
              </Form.Label>
              <Form.Control
                required
                isValid={passwordValidity}
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPasswordConfirmation(e.target.value);
                }}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="mb-2"
              style={{ width: "100%", background: theme?.primaryColor, color: theme?.tertiaryColor }}
            >
              <strong>Register</strong>
            </Button>
          </Form>
        </LoginFormDiv>
      </LoginContainer>
    </HeroDiv>
  );
}
