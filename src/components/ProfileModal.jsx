import React from "react";
import { MdModeEdit } from "react-icons/md";
import { Modal, Form, Input } from "antd";
import styled from "styled-components";

export default function ProfileModal({
  name,
  picture,
  occupation,
  location,
  work,
  github,
  linkedin,
  twitter,
  website,
  email,
  editSocials,
  setStates,
}) {
  const [form] = Form.useForm();
  const { confirm } = Modal;

  return (
    <MdModeEdit
      onClick={() => {
        confirm({
          icon: false,
          title: "Meu Perfil",
          okText: "Confirmar",
          cancelText: "Cancelar",
          onOk(_) {
            form.submit();
          },
          maskClosable: true,
          content: (
            <Form
              form={form}
              className="form"
              layout="vertical"
              onFinish={(values) => {
                editSocials(values);
                setStates(values);
                Modal.destroyAll();
              }}
            >
              <section className="sectionInputs">
                <InputWrap>
                  <Form.Item
                    name="name"
                    label="Seu Nome"
                    initialValue={name}
                    required={false}
                    rules={[
                      {
                        required: true,
                        message: "Seu nome é obrigatório!",
                      },
                    ]}
                  >
                    <Input className="input" />
                  </Form.Item>
                </InputWrap>
                <InputWrap>
                  <Form.Item
                    name="picture"
                    label="Foto"
                    initialValue={picture}
                    validateFirst
                    rules={[
                      {
                        validator: (_, value) => {
                          if (
                            !value.match(
                              /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/
                            )
                          ) {
                            return Promise.reject("Imagem no formato errado!");
                          }
                          return Promise.resolve();
                        },
                      },
                    ]}
                  >
                    <Input
                      placeholder="Ex: https://url.png"
                      className="input"
                    />
                  </Form.Item>
                </InputWrap>
              </section>

              <section className="sectionInputs">
                <InputWrap>
                  <Form.Item
                    name="occupation"
                    label="Ocupação"
                    initialValue={occupation}
                  >
                    <Input className="input" />
                  </Form.Item>
                </InputWrap>
                <InputWrap>
                  <Form.Item
                    name="location"
                    label="Localização"
                    initialValue={location}
                  >
                    <Input className="input" />
                  </Form.Item>
                </InputWrap>
              </section>

              <section className="sectionInputs">
                <InputWrap>
                  <Form.Item name="work" label="Empresa" initialValue={work}>
                    <Input className="input" />
                  </Form.Item>
                </InputWrap>
                <InputWrap>
                  <Form.Item name="github" label="GitHub" initialValue={github}>
                    <Input placeholder="Ex: usuario" className="input" />
                  </Form.Item>
                </InputWrap>
              </section>

              <section className="sectionInputs">
                <InputWrap>
                  <Form.Item
                    name="linkedin"
                    label="Linkedin"
                    initialValue={linkedin}
                  >
                    <Input placeholder="Ex: usuario-123" className="input" />
                  </Form.Item>
                </InputWrap>
                <InputWrap>
                  <Form.Item
                    name="twitter"
                    label="Twitter"
                    initialValue={twitter}
                  >
                    <Input placeholder="Ex: usuario" className="input" />
                  </Form.Item>
                </InputWrap>
              </section>

              <section className="sectionInputs">
                <InputWrap>
                  <Form.Item
                    name="website"
                    label="Website"
                    initialValue={website}
                  >
                    <Input className="input" />
                  </Form.Item>
                </InputWrap>
                <InputWrap>
                  <Form.Item name="email" label="Email" initialValue={email}>
                    <Input className="input" />
                  </Form.Item>
                </InputWrap>
              </section>
            </Form>
          ),
        });
      }}
    />
  );
}

const InputWrap = styled.div`
  label {
    color: #fff;
    font: 400 1.3rem "Merriweather Sans", sans-serif;
  }
  .ant-form-item-label {
    padding-bottom: 0.5rem;
  }

  .input {
    background-color: #22212c !important;
    width: 30rem !important;
    height: 5rem !important;
    border-radius: 0.5rem !important;

    color: #fff !important;
    font: 400 1.6rem "Poppins", sans-serif !important;

    input {
      width: 32.7rem !important;
      height: 5rem !important;
      border: none !important;
      background-color: #22212c !important;

      font-family: "Poppins", sans-serif !important;
      font-size: 1.6rem !important;
      color: #fff !important;

      &::placeholder {
        font-family: "Poppins", sans-serif !important;
        opacity: 1 !important;
        color: #fff !important;
        font-size: 1.6rem !important;
        font-weight: 400 !important;
      }
    }
    .ant-input-suffix svg path {
      fill: #fff !important;
    }
  }
  .ant-form-item {
    margin: 0 !important;
  }
`;
