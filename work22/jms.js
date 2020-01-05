(function () {
    var JMS = function (id,rowCount,colCount,minLandMineCount, maxLandMineCount) {
        if (!(this instanceof JMS))
        return new JMS(id, rowCount, colCount, minLandMineCount, maxLandMineCount);
        this.doc = document;
        this.table = this.doc.getElementByld(id);
        this.cells = this.table.getElementsByTagName("td");
        this.rowCount = rowCount
    }
})