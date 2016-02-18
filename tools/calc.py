
import math, sys

# given an array x, return pairs of subsequent elements, which is useful for autocorrelation
def prep_autocorrelate(x):
  ret = []
  for i in range(len(x)-1):
    assert 0 <= x[i] <= 255
    ret.append((x[i], x[i+1]))
  return ret

# calculates the statistical mutual information (MI)
# @data: an array of samples, each sample is (x, y), we
#        calculate the MI of X, Y, where X, Y take
#        values in [0, 255]
def calc_mi(data):
  #print data

  marginal_xs = [0]*256
  marginal_ys = [0]*256
  both_xys = [0]*256*256

  n = len(data)

  for a in data:
    x = a[0]
    y = a[1]
    marginal_xs[x] += 1 / float(n)
    marginal_ys[y] += 1 / float(n)
    both_xys[x*256 + y] += 1 / float(n)

  #print marginal_xs
  #print marginal_ys
  #print both_xys

  ret = 0
  for x in range(256):
    marginal_x = marginal_xs[x]
    if marginal_x == 0: continue
    for y in range(256):
      marginal_y = marginal_ys[y]
      if marginal_y == 0: continue
      both = both_xys[x*256 + y]
      if both == 0: continue
      #print n, marginal_x, marginal_y, both
      ret += both * math.log(both / (marginal_x * marginal_y))
      print 'both', x, y, marginal_x, marginal_y, both, '==>', ret
  return ret

# main

name = sys.argv[1]

print 'calculating for', name

print calc_mi(prep_autocorrelate(map(ord, open(name).read())))

