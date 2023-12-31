import React, { useState } from 'react';
import { Rate } from 'antd';
function Rat(){
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
      const [value, setValue] = useState(3);
      return (
        <span>
          <Rate tooltips={desc} onChange={setValue} value={value} />
          {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
        </span>
      );
}
export default Rat;