import React, { Component } from 'react';

class TOC extends Component {
    shouldComponentUpdate(newProps, newState) {
      console.log('TOC render shouldComponentUpdate',
      newProps.data,
      this.props.data
      );

      // concat이 아니라 push로 리스트를 추가했다면 밑과 같은 방식은 할 수 없다. (원본데이터가 바뀌었기 때문에, newProps === this.props 가 되버립)
      if(this.props.data === newProps.data){ // 바뀐값이 없으면 render 함수를 호출하지 않음
        return false; // false 면 밑의 render 함수는 호출하지 x
      }
      return true; 
    }
    render() {
      console.log('TOC render');
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length){
      lists.push(
        <li key={data[i].id}>
          <a 
            href={"/content/"+data[i].id}
            data-id={data[i].id}
            onClick={function(e){
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
          >{data[i].title}</a></li>)
        i = i + 1;
      }
      return (
        <nav>
          <ul>
            {lists}
          </ul>
      </nav>
      );
    }
  }

export default TOC;