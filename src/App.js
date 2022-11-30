import React, {Component, Fragment} from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
    render() {
        const noNaMe = 'xoxo';

        return (

            <div>
                <TodoListTemplate form={<Form></Form>}>
                    템플릿완성
                    <TodoItemList/>
                </TodoListTemplate>

                

            </div>

        );

    }
}
export default App;