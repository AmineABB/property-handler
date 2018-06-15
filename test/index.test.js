import { expect } from 'chai'

import propertyHandler from '../src/index'

import data from '../mock/data'

describe('Property-handler', () => {
    it('Should return undefined if the passed object do not exist', () => {
        expect(propertyHandler.getProp(undefined)).to.be.a('undefined')
    })

    describe('Property via string dot', () => {
        it('Should return the same object property value', () => {
            expect(propertyHandler.getProp(data, '1.favoriteFruit')).to.equal('banana')
        })
        it('Should return list of object with property values', () => {
            expect(propertyHandler.getProp(data, '1.friends')).to.be.an('array').that.have.deep.members(GetDotStringPropertyList())
        })
    })

    describe('Property directly by name', () => {
        it('Should return the same object property value', () => {
            expect(propertyHandler.getProp(data, 'toto')).to.equal('bar')
        })
        it('Should return list of object with property values', () => {
            expect(propertyHandler.getProp(data, 'friends')).to.be.an('array').that.have.deep.members(getAllNestedPropertiesValue())
        })
    })
})

function GetDotStringPropertyList() {
    return [
        {
            id: 0,
            name: 'Garrett Snider',
        },
        {
            id: 1,
            name: 'Sabaku',
        },
    ]
}

function getAllNestedPropertiesValue() {
    return [
        {
            id: 0,
            name: 'Garrett Snider',
        },
        {
            id: 1,
            name: 'Sabaku',
        },
        {
            id: 0,
            name: 'Chen Moss',
        },
        'Chen Moss',
    ]
}
