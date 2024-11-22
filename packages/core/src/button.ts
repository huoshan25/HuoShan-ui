export interface ButtonState {
  disabled: boolean;
  loading: boolean;
}

export class ButtonCore {
  private state: ButtonState;

  constructor(initialState?: Partial<ButtonState>) {
    this.state = {
      disabled: false,
      loading: false,
      ...initialState
    };
  }

  setDisabled(disabled: boolean) {
    this.state.disabled = disabled;
  }

  setLoading(loading: boolean) {
    this.state.loading = loading;
  }

  getState(): ButtonState {
    return { ...this.state };
  }
}