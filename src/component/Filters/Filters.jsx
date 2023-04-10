import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import {useDispatch} from 'react-redux'
// import { searchFilterChange } from '../../redux/actions';
import filtersSlice from '../../redux/features/FiltersSlice';
const { Search } = Input;

const Filters = () => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();

  const handleChangeSearch = (e) => {
    console.log(e.target.value);
    setSearchText(e.target.value);
    dispatch(filtersSlice.actions.searchFilterChange(e.target.value));
  }
  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search 
          placeholder='input search text' 
          value={searchText}
          onChange={handleChangeSearch}
        />
      </Col>
    </Row>
  );
}

export default Filters;