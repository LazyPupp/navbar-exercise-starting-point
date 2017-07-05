'use strict';
const appState = {
  contentToggle: false,
  courseToggle: false,
  howToggle: false,
  border1: false,
  border2:false
};

function changeBorder1(state){
  if(state.border1){
    return state.border1 = false;
  }
  return state.border1 = true;
}

function changeBorder2(state){
  if(state.border2){
    return state.border2 = false;
  }
  return state.border2 = true;
}

function changeContent(state){
  if(state.contentToggle){
    return state.contentToggle = false;
  }
  return state.contentToggle = true;
}

function changeCourse(state){
  state.border2 = false;
  state.howToggle= false;
  if(state.courseToggle){
    return state.courseToggle = false;
  }
  return state.courseToggle = true;
}

function changeHow(state){
  state.border1 = false;
  state.courseToggle=false;
  if(state.howToggle){
    return state.howToggle = false;
  }
  return state.howToggle = true;
}

function render(state, content, course, how,border1,border2){
  if(state.contentToggle){
    content.removeClass('hidden');
  }else{
    content.addClass('hidden');
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
  if(state.border1){
    border1.show();
  }else{
    border1.hide();
  }
  if(state.border2){
    border2.show();
  }else{
    border2.hide();
  }
}

$(function (){
  render(appState, $('.nav_bar'), $('.js_course'), $('.js_how'),$('.sub_nav_bar1'),$('.sub_nav_bar2'));
  
  $('.hamburger').on('click', function(event){
    changeContent(appState);
    render(appState, $('.nav_bar'), $('.js_course'), $('.js_how'),$('.sub_nav_bar1'),$('.sub_nav_bar2'));
  });
  $('.toggle_course').on('click', function(event){
    changeCourse(appState);
    changeBorder1(appState);
    render(appState, $('.nav_bar'), $('.js_course'), $('.js_how'),$('.sub_nav_bar1'),$('.sub_nav_bar2'));
  });
  $('.toggle_how').on('click', function(event){
    changeHow(appState);
    changeBorder2(appState);
    render(appState, $('.nav_bar'), $('.js_course'), $('.js_how'),$('.sub_nav_bar1'),$('.sub_nav_bar2'));
  });
});
