import React from 'react'

import Form from './Form'
// 古い書き方
// class App extends React.Component {
//   render() {
//     return <div>app</div>
//   }
// }

// ファンクショナルコンポーネントと言う書き方
const App = () => (

 
  <div className="text-center mt-5">
    <Form />

    <label className="mt-5">
      <input type="checkbox" />
      全てを完了する
    </label>

    <select>
      <option>全て</option>
      <option>未完了</option>
      <option>完了済</option>
    </select>

    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <label>
          <input type="checkbox" />
          洗濯する
        </label>
        <button>編集</button>
        <button>削除</button>
      </li>
      <li className="list-group-item">
        <label>
          <input type="checkbox" />
          筋トレ
        </label>
        <button>編集</button>
        <button>削除</button>
      </li>
      <li className="list-group-item">
        <label>
          <input type="checkbox" />
          瞑想
        </label>
        <button>編集</button>
        <button>削除</button>
      </li>
    </ul>
    <button className="mt-5">完了済を全て削除</button>
  </div>
)
export default App;