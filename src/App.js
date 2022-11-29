import React, {Component, Fragment} from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';

class App extends Component {
    render() {
        const noNaMe = 'xoxo';

        return (

            <div>
                <TodoListTemplate form={<Form></Form>}>
                    템플릿완성
                </TodoListTemplate>

            </div>

        );

    }
}
export default App;