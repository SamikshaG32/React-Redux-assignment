import React, { useEffect, useRef, useState } from 'react';
import * as fabric from 'fabric';

// js library, which enable to create & manipulate interactive 2D graphics on an HTML canvass

const FabricCanvas = () => {
  // Create a reference to the canvas element
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    // Initialize the Fabric.js canvas when the component is mounted
    const fabricCanvas = new fabric.Canvas(canvasRef.current, {
      width: 800,
      height: 600,
    });

    // Set background color for the canvas
    fabricCanvas.backgroundColor = '#f0f0f0'; // Set background color directly

    // Store the canvas reference to use later for operations like zoom, adding text, etc.
    setCanvas(fabricCanvas);

    // Add an image to the canvas
    const imgElement = document.createElement('img');
    imgElement.src = '/logo512.png';
    imgElement.onload = function () {
      const img = new fabric.FabricImage(imgElement, {
        left: 100,
        top: 100,
        angle: 0,
        scaleX: 1,
        scaleY: 1,
      });
      fabricCanvas.add(img); // Add image to the canvas
    };

    // Clean up and will add new
    return () => {
      fabricCanvas.dispose();
    };
  }, []);

  // Zoom In Function
  const zoomIn = () => {
    if (canvas) {
      const zoom = canvas.getZoom();
      canvas.setZoom(zoom * 1.1);
    }
  };

  // Zoom Out Function
  const zoomOut = () => {
    if (canvas) {
      const zoom = canvas.getZoom();
      canvas.setZoom(zoom / 1.1);
    }
  };

  // Rotate Image Function
  const rotateImage = () => {
    const activeObject = canvas?.getActiveObject();
    if (activeObject) {
      activeObject.rotate(activeObject.angle + 15); // Rotate 15 degrees
      canvas.renderAll();
    } else {
      alert('Please select an image');
    }
  };

  // Stretch Image Function
  const stretchImage = () => {
    const activeObject = canvas?.getActiveObject();
    if (activeObject) {
      activeObject.scaleX *= 1.2; // Stretch the image by 20%
      activeObject.scaleY *= 1.2;
      canvas.renderAll();
    } else {
      alert('Please select an image');
    }
  };

  // Add Text Function
  const addText = () => {
    const text = new fabric.FabricText('Hello Fabric.js!', {
      left: 200,
      top: 200,
      fontFamily: 'Arial',
      fontSize: 30,
      fill: '#333',
    });
    canvas.add(text); // Add text to the canvas
  };

  return (
    <div>
      <h1>Fabric.js Canvas Operations</h1>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          onClick={zoomIn}
          style={{
            padding: '10px 20px',
            margin: '10px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Zoom In
        </button>
        <button
          onClick={zoomOut}
          style={{
            padding: '10px 20px',
            margin: '10px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Zoom Out
        </button>
        <button
          onClick={rotateImage}
          style={{
            padding: '10px 20px',
            margin: '10px',
            backgroundColor: '#ff9800',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Rotate
        </button>
        <button
          onClick={stretchImage}
          style={{
            padding: '10px 20px',
            margin: '10px',
            backgroundColor: '#3f51b5',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Stretch
        </button>
        <button
          onClick={addText}
          style={{
            padding: '10px 20px',
            margin: '10px',
            backgroundColor: '#9c27b0',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Add Text
        </button>
      </div>

      <div id="canvas-container" style={{ textAlign: 'center' }}>
        <canvas ref={canvasRef} width="800" height="600" />
      </div>


    </div>
  );
};

export default FabricCanvas;
