export function string_to_slug(children) {
    let innerText: string = extract_text(children)
    return slugify(innerText)
}

export function slugify(str) {
    str = str.replace(/^\s+|\s+$/g, '') // trim
    str = str.toLowerCase()

    // remove accents, swap ñ for n, etc
    var from = 'ıüöçğàáäâèéëêìíïîòóöôùúüûñç·/_,:;'
    var to = 'iuocgaaaaeeeeiiiioooouuuunc------'
    for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
    }

    str = str
        .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-') // collapse dashes
    return str
}
export function extract_text(txt: any): string {
    let innerText = ''
    let txtType = Object.prototype.toString.call(txt)
    // String header
    if (txtType === '[object String]') {
        innerText = txt
    }
    // Anchor header
    else if (txtType === '[object Object]') {
        innerText = txt.props.children
    }
    // Array header
    else if (txtType === '[object Array]') {
        txt.forEach((element) => {
            innerText += extract_text(element)
        })
    }
    return innerText
}
