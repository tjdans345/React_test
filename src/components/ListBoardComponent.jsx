import React, {Component} from 'react';
import BoardService from "../service/BoardService";

class ListBoardComponent extends Component {

    // 생성자
    constructor(props) {
        super(props);

        this.state = {
            boards: []
        }

        this.createBoard = this.createBoard.bind(this);

    }

    componentDidMount() {
        BoardService.getBoards().then((res) => {
            console.log(res.data);
           this.setState({boards: res.data});
        });
    }

    createBoard() {
        this.props.history.push('/create-board');
    }


    render() {
        return (
            <div>
                <h2 className="text-center">Board List</h2>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.createBoard}>글 작성</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>글 번호</th>
                                <th>타이틀 </th>
                                <th>내용</th>
                                <th>이미지</th>
                                <th>작성일</th>
                                <th>조회수</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.boards.map(
                                boards =>
                                    <tr key={boards.idx}>
                                        <td>{boards.idx}</td>
                                        <td>{boards.title}</td>
                                        <td>{boards.contents}</td>
                                        <td>
                                            <img src={boards.image}/>
                                        </td>
                                        <td>{boards.createDate}</td>
                                        <td>{boards.viewCount}</td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListBoardComponent;