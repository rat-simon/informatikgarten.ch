export function loadScript(scriptUrl: string, defer = false) {
    const script = document.createElement('script')
    script.src = scriptUrl
    script.defer = defer
    document.head.appendChild(script)

    return new Promise((res, rej) => {
        script.onload = function () {
            res(self)
        }
        script.onerror = function () {
            rej(self)
        }
    })
}
