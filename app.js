'use strict';
const appState = {
  contentToggle: false,
  courseToggle: false,
  howToggle: false
};

function changeContent(state){
  if(state.contentToggle){
    return state.contentToggle = false;
  }
  return state.contentToggle = true;
}

function changeCourse(state){
  if(state.courseToggle){
    return state.courseToggle = false;
  }
  return state.courseToggle = true;
}

function changeHow(state){
  if(state.howToggle){
    return state.howToggle = false;
  }
  return state.howToggle = true;
}

function render(state, content, course, how){
  if(state.contentToggle){
    content.show();
  }else{
    content.hide();
  }
  if(state.courseToggle){
    course.show();
  }else{
    course.hide();
  }
  if(state.howToggle){
    how.show();
  }else{
    how.hide();
  }
}

$(function (){
  render(appState, $('.nav_bar'), $('.js_course'), $('.js_how'));
  
  $('.hamburger').on('click', function(event){
    changeContent(appState);
    render(appState, $('.nav_bar'), $('.js_course'), $('.js_how'));
  });
  $('.toggle_course').on('click', function(event){
    changeCourse(appState);
    render(appState, $('.nav_bar'), $('.js_course'), $('.js_how'));
  });
  $('.toggle_how').on('click', function(event){
    changeHow(appState);
    render(appState, $('.nav_bar'), $('.js_course'), $('.js_how'));
  });
});
