import { ExcalidrawImageElement, FileId, FractionalIndex } from "@excalidraw/excalidraw/element/types";

export const excali_image_template: ExcalidrawImageElement = {
    type: 'image',
    id: 'raw',
    status: 'saved',
    fileId: 'raw' as FileId,
    // generic attributes
    // ------------------
    index: { _brand: "franctionalIndex" } as FractionalIndex,
    version: 2,
    versionNonce: Date.now(),
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    scale: [1, 1],
    isDeleted: false,
    fillStyle: 'hachure',
    strokeWidth: 1,
    strokeStyle: 'solid',
    roughness: 1,
    opacity: 100,
    groupIds: [],
    strokeColor: '#000000',
    backgroundColor: 'transparent',
    seed: Date.now(),
    roundness: null,
    angle: 0,
    frameId: null,
    boundElements: null,
    updated: Date.now(),
    locked: false,
    link: null,
    crop: null
}