var testBlock = {
    header: 'Programming Test',
    question: 'Question №',
    answer: 'Answer №',
    button: 'Check my results!',
    builder: function pageGenerator() {
        document.body.appendChild(document.createElement('div')).classList.add('wrapper');

        var wrapper = document.querySelector('.wrapper');
        wrapper.appendChild(document.createElement('header'));
        wrapper.appendChild(document.createElement('main'));

        var title = document.createElement('h1');
        title.innerHTML = this.header;
        title.classList.add('title');
        document.querySelector('header').appendChild(title);

        var form = document.createElement('form');
        form.setAttribute('method', 'post');
        form.setAttribute('action', 'index.html');
        document.querySelector('main').appendChild(form);

        var qn = prompt('Enter the number of questions', 'it must be an integer');

        for (var i = 0; i < qn; i++) {

          var an = prompt('Enter the number of answers for question №' + (i + 1));

          var questionBlock = document.createElement('fieldset');
          questionBlock.classList.add('form__block');
          form.appendChild(questionBlock);

          var questionTitle = document.createElement('legend');
          questionTitle.classList.add('title');
          questionBlock.appendChild(questionTitle);
          questionTitle.innerHTML = (i + 1) + '.' + this.question + (i + 1);

          for (var k = 0; k < an; k++) {

            var label = document.createElement('label');
            label.classList.add('form__item');
            label.innerHTML = (k + 1) + '.' + this.answer + (k + 1);
            questionBlock.appendChild(label);

            var radio = document.createElement('input');
            radio.setAttribute('type', 'radio');
            radio.setAttribute('required', '');
            radio.setAttribute('name', 'radio' + (i + 1));
            label.appendChild(radio);
          }
        }

        var button = document.createElement('button');
        button.setAttribute('type', 'sumbit');
        button.innerHTML = this.button;
        form.appendChild(button);

      }
  };

testBlock.builder();
