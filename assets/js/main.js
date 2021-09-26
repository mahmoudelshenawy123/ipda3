 
 
 
  let closeOpenCollapsed = (e)=>{
    let collapseElements=document.querySelectorAll('.dropdownAnchor ~ ul')
    collapseElements.forEach(val =>{
        val.classList.remove('show')
    })
        e.target.classList.add('show')
  }

/** add category */

let getImageurl = (e)=>{
  const imgPath =e.target.files[0]
  this.categoryLogo = URL.createObjectURL(imgPath);
};
let AddCategory =() =>{
  let category={
      "categoryLogo" :this.categoryLogo,
      "categoryName" :this.categoryName,
      "categoryDescription" :this.categoryDescription,
      "categoryTitle" :this.categoryTitle
  }
  if((this.categoryLogo)&&(this.categoryName)&&(this.categoryDescription )&&(this.categoryTitle)){
      console.log(category)
      // axios.post('', category).then(res =>coonsole.log('Category is added successfully')).catch(err => alert('something went wrong.'))


  }
  if(!this.categoryLogo){
      document.querySelector('#logoSpan').removeAttribute('hidden')
  }
  if(!this.categoryName){
      document.querySelector('#nameSpan').removeAttribute('hidden')
  }
  if(!this.categoryDescription ){
      document.querySelector('#descriptionSpan').removeAttribute('hidden')
  }
  if(!this.categoryTitle){
      document.querySelector('#titleSpan').removeAttribute('hidden')
  }
};
let removeValidationSpan = ()=>{
if(this.categoryLogo){
      document.querySelector('#logoSpan').setAttribute('hidden',true)
  }else{
      document.querySelector('#logoSpan').removeAttribute('hidden')
  }

  if(this.categoryName){
      document.querySelector('#nameSpan').setAttribute('hidden',true)
  }else{
      document.querySelector('#nameSpan').removeAttribute('hidden')
  }
  
  if(this.categoryDescription ){
      document.querySelector('#descriptionSpan').setAttribute('hidden',true)
  }else{
      document.querySelector('#descriptionSpan').removeAttribute('hidden')
  }
  if(this.categoryTitle){
      document.querySelector('#titleSpan').setAttribute('hidden',true)
  }else{
      document.querySelector('#titleSpan').removeAttribute('hidden')
  }
}



/************ delete category **************/

let deleteCategory =() =>{ 
  axios.delete(`https://api.instantwebtools.net/v1/passenger/1}`).then(alert("Deleted Successfully")).catch(alert('something Went Wrong'))
}