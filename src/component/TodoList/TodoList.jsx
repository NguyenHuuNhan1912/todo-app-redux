import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo/Todo';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
// redux core
// import { addTodo } from '../../redux/actions';
// redux tool
import todoListSlice from '../../redux/features/TodoListSlice';
import { useState } from 'react';
import { todoRemainingSelector } from '../../redux/selector';
const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector(todoRemainingSelector);
  const [todoName, setTodoName] = useState('');
  const [priority, setPriority] = useState('Medium');
  const handleClickAdd = () => {
    dispatch(todoListSlice.actions.addTodo({
      id: uuidv4(),
      name: todoName,
      priority: priority,
      completed: false,
    }));
    setTodoName('');
    setPriority('Medium');
  }
  const handleChangePrio = (value) => {
    setPriority(value);
  }
  const handleChangeInput = (e) => {
    setTodoName(e.target.value);
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {
          todoList.map((item, index) => {
            return (
              <Todo key={index} name={item.name} prioriry={item.priority} />
            )
          })
        }
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input
            value={todoName}
            onChange={handleChangeInput}
          />
          <Select defaultValue="Medium" value={priority} onChange={handleChangePrio}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleClickAdd}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}

export default TodoList;