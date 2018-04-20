function draw() {
	var canvas = document.getElementById('gaussianCanvas');
	console.log("Connected")
	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');
		canvas.width = window.innerWidth;
		// canvas.height = window.innerHeight;
	
		// window.addEventListener("resize", resizeCanvas, false);
		// window.addEventListener("orientationChange", resizeCanvas, false);
		// var gaussianCurve = new Path2D();

		// var numberLine = new Path2D();

		// numberLine.moveTo(0,75);
		// numberLine.lineTo(150,75);


		// ctx.fillRect(25,25,20,55)


		//let the x coordinate be the the distance from the middle to the pixe
	



		// ctx.moveTo(canvas.width/2,canvas.height);

		const SD = canvas.width*3/25;
		const tick = 10


		//draw bell curve
		for (var i = 0; i <= canvas.width; i++) {
			var y = 750*standardGaussianPDF((i-canvas.width/2)/SD);
			
			ctx.lineTo(i, canvas.height - y);			
			// console.log(i);
			// console.log(y);
		}
		ctx.stroke();

		// //fill bell curve
		for (var i = 0; i <= canvas.width; i++) {
			var y = 750*standardGaussianPDF((i-canvas.width/2)/SD);
			ctx.lineTo(i, canvas.height - y);			
			// console.log(i);
			// console.log(y);
		}
		ctx.stroke();

		console.log(canvas.width/2-(3)*SD);
		//draw x-axis tick marks
		ctx.lineWidth = 3;
		for (var i = 0; i <= 6; i++) {
            ctx.moveTo(canvas.width/2-(3-i)*SD, canvas.height);
			ctx.lineTo(canvas.width/2-(3-i)*SD,canvas.height - tick);
            console.log(i);

		}

		ctx.stroke();
	}
}

function gaussianPDF(x, mu, SD) {
	return 1/Math.sqrt(2*Math.PI*SD*SD)*Math.E**(-1/2*((x-mu)/SD)**2);
}

function standardGaussianPDF(z) {
	return 1/Math.sqrt(2*Math.PI)*Math.E**(-1/2*z**2);
}

function bellCurveSketch(canvas, context) {
	for (var i = 0; i <= canvas.width; i++) {
			var y = 750*standardGaussianPDF((i-canvas.width/2)/SD);
			
			context.lineTo(i, canvas.height - y);			
			// console.log(i);
			// console.log(y);
		}
		context.stroke();
}

function bellCurveFill() {

}