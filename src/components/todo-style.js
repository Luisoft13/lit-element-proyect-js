import {css} from 'lit-element/lit-element.js';

export const style = css`
    *{
        font-family: monospace
    }
    ul{
        margin:0;
        padding-inline-start: 0
    }
    .todo-button{
        padding: 7px;
    }
    .todo-input{
      margin:40px 0;
    }
    .input-class {
      padding: 5px;
      font-size: 1rem;
      width:240px
    }

    .todo-body{
        text-align:center
    }
    .todo-item{
      display: flex;
      justify-content: space-between;
      padding: 10px;
      margin: 5px auto;
      font-size: 1.5rem;
      border-radius: 5px;
      background-color: #c2e0ff
    }

    .todo-actions {
      display: flex;
      align-items: center;
      gap: 8px
    }
`
