import icons from 'url:../../img/icons.svg';
import PreviewView from './previewView.js';
import View from './view.js'

class ResultsView extends View {
    _parentElement = document.querySelector('.results')
    _errorMessage = 'We could not find that recipe. Please try another one!'
    _message = ''

    _generateMarkup() {
        return this._data.map(bookmark => PreviewView.render(bookmark, false)).join('')
    }
}

export default new ResultsView()