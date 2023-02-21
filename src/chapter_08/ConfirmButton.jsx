import React from "react";

class ConfirmButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isConfirmed: false, //확인여부를 체크하기 위한 변수 : 초기값
        };

        this.handleConfirm = this.handleConfirm.bind(this);
    }

    handleConfirm() { //button의 event를 처리하기 위해서 eventHandler로 만듦.
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        }));
    }

    render() {
        return (
            <button
                onClick={this.handleConfirm} //bind 방식으로 eventHandler처리
                disabled={this.state.isConfirmed}
            >
                {this.state.isConfirmed ? "확인됨":"확인하기"}
            </button>
        );
    }
}

export default ConfirmButton;