import React, { Component } from 'react';
import { connect } from 'react-redux';

import Immutable from 'immutable';

// import PropTypes from 'prop-types';

// import { ..... } from '../actions';

// import ..... from '../containers/......jsx';

class App extends Component {

  static propTypes = {
    //.....
  }

  imutableJS() {
    // Импорт методов из бибиотеки Immutable
    const {
      // Map,
      List,
      Set,
      fromJS,
    } = Immutable;

    // Функция логирования
    const log = (...args) => console.log(...args.map(arg =>
      JSON.parse(JSON.stringify(arg))));

    const users = fromJS([
      {
        name: 'Vasya',
        surname: 'Ivanov',
        age: 22,
        interests: ['computers', 'food']
      },
      {
        name: 'Ivan',
        surname: 'Tretyakov',
        age: 34,
        interests: ['computers', 'food', 'cars']
      },
      {
        name: 'Daryna',
        surname: 'Petrova',
        age: 21,
        interests: ['cars', 'math']
      },
      {
        name: 'Petro',
        surname: 'Nalyvaiko',
        age: 22,
        interests: ['computers', 'food', 'math']
      }
    ]);

    // log(
      // получить занчение по 1 шагу
      // users.get(0).get('name'),

      // получить значение сразу цепочка действий
    //   users.getIn([1, 'interests', 0])
    // );

    // .push() в массив нового элемента
    // const users2 = users.push(fromJS(
    //   {
    //     name: 'Valera',
    //     surname: 'Nalyvaiko',
    //     age: 22,
    //     interests: ['computers', 'food', 'math']
    //   }
    // ));

    // Результат пуша и сравнение ссылок
    // log('users:', users, ' users2:', users2);

    // log('сравнение ссылок на первые елементы массивов:',
    //   users.get(0) === users2.get(0));


    // поиск по массиву 'pet'
    {
      const search = 'pet';

      const filteredUsers = users.filter(user =>
        (user.get('name') + user.get('surname')).toLowerCase().search(search) !== -1
      );
      log(
        'Поиск по массиву pet',
        filteredUsers
      );
    }

    //поиск по интересу в поле 'interests'
    {
      const interest = 'computers';

      const filteredUsersByInterest = users.filter(user =>
        user.get('interests').includes(interest)
      );
      log(
        'Поиск по интересу в поле interests',
        filteredUsersByInterest
      );
    }

    //поиск отсутствию наличия интереса в поле 'interests'
    {
      const interest = 'computers';

      const filteredUsers = users.filterNot(user =>
        user.get('interests').includes(interest)
      );
      log(
        'Поиск отсутствию наличия интереса в поле interests',
        filteredUsers
      );
    }

    //Все уникальные значения во всех полях'interests'
    {
      const allUnicInterest = users.reduce((set, user) =>
        set.union(user.get('interests')),
      new Set()
      );
      log(
        'Все значения уникальные во всех полях interests',
        allUnicInterest
      );
    }

    //Все значения во всех полях'interests', в одном массиве
    {
      const allInterest = users.reduce((set, user) =>
        set.concat(user.get('interests')),
      new List()
      );
      log(
        'Все значения во всех полях interests, в одном массиве',
        allInterest
      );
    }

    //Пользователи отсортированны по возрасту и map имя + фамилия
    {
      const sortedUsers = users
        .sortBy(user => user.get('age'))
        .map(user => `${user.get('name')} ${user.get('surname')}`);
        // .first(); вернет только первый элемент
        // .last(); вернет только последний элемент
      log(
        'Пользователи отсортированны по возрасту и map имя + фамилия',
        sortedUsers
      );
      console.log(
        'Возвращаем массив в человеческий вид с помощью .toJS()',
        sortedUsers.toJS()
      );
    }

  }

  render() {
    this.imutableJS();
    return (
      <div className="wrapper">
        {'Hello imutableJS!'}
      </div>
    );
  }
}

export default connect(null, null)(App);
