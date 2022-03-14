export interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement,
  password: HTMLInputElement,
}

export interface LoginFormElement extends HTMLFormElement{
  readonly elements: FormElements
}
