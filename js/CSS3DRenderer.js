class CSS3DObject extends THREE.Object3D {
	constructor(element) {
	  super();
	  this.element = element;
	  this.element.style.position = 'absolute';
	}
  }
  
  class CSS3DRenderer {
	constructor() {
	  const domElement = document.createElement('div');
	  domElement.style.overflow = 'hidden';
	  domElement.style.position = 'absolute';
	  domElement.style.top = '0';
	  domElement.style.left = '0';
	  this.domElement = domElement;
  
	  this.render = (scene, camera) => {
		scene.children.forEach((object) => {
		  const style = `translate3d(${object.position.x}px, ${object.position.y}px, ${object.position.z}px)`;
		  object.element.style.transform = style;
  
		  if (object.element.parentNode !== domElement) {
			domElement.appendChild(object.element);
		  }
		});
	  };
	}
  
	setSize(width, height) {
	  this.domElement.style.width = width + 'px';
	  this.domElement.style.height = height + 'px';
	}
  }
  
  export { CSS3DObject, CSS3DRenderer };