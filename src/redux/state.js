let rerenderEntireTree = () => {
}

let state = {
    _state: {
        color: '$f0f0f0',
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        rerenderEntireTree = observer;
    },
    dispatch(action) {
        switch (action.type) {
            case "UPDATE_COLOR":
                this._state.color = action.value;
                rerenderEntireTree(this._state);
                break;
        }
    }
}

export default state;